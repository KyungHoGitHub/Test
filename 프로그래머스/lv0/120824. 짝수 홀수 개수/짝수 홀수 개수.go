func solution(num_list []int) []int {
    one := 0
    two := 0
    
    for _,v := range num_list{
        if v % 2 == 0 {
            two++
        }else {
            one++
        }
    }
    return []int{two,one}
}