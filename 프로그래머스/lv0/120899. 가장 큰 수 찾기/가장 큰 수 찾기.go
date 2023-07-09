func solution(array []int) []int {
    maxCount := array[0]
    maxIndex := 0
    
    for i, v := range array{
        if v > maxCount{
            maxCount = v
            maxIndex = i
        }
    }
    test := []int{maxCount, maxIndex}
    return test
}