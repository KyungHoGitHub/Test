func solution(start int, end int) []int {
    var test []int
    if start <= end {
        for i := start; i<= end; i++{
            test = append(test, i)
        }
    }else{
        for i:= start; i>= end; i--{
            test = append(test,i)
        }
    }
    return test
}