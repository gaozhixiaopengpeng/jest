import sum from '@/utils/sum'

describe('sum', () => {
    it('加法', () => {
        expect(sum(1, 2)).toEqual(3)
    })
})