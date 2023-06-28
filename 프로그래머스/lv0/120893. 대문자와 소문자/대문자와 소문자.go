import "strings"
func solution(my_string string) string {
    var convertValue string
    for _ , v := range my_string{
        if v >= 'a' && v <='z' {
            convertValue += strings.ToUpper(string(v))
        }else if v >='A' && v<= 'Z'{
             convertValue += strings.ToLower(string(v))
        }else{
            convertValue += string(v)
        }
    }
    return convertValue
}