func solution(strlist []string) []int {
    test := make([]int, len(strlist))
    
    for i,v := range strlist{
        test[i] = len(v)
    }
    return test
}