import getSearchParams from "@/utils/getSearchParams";

describe('获取地址栏参数', () => {
    it('地址栏参数', () => {
        window.location.href = 'https://example.com?page=1&size=10';

        expect(window.location.search).toEqual('?page=1&size=10')
        expect(getSearchParams()).toEqual({
            page: "1",
            size: "10"
        })
    })

    it('空参数返回空', () => {
        window.location.href = 'https://example.com';
        
        expect(window.location.search).toEqual('')
        expect(getSearchParams()).toEqual({})
    })
})