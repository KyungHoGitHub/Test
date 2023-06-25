func solution(array []int, n int) int {
    test := 0
    
    for _, v := range array {
        if v == n{
            test++
        }
    } 
    return test
}