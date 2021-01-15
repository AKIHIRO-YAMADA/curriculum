public class Task1_4 {
    private static final String CONST_MSG_SUCCESS = "ログイン成功です。";
    private static final String CONST_MSG_ERROR_NAME = "名前に誤りがあります。";
    private static final String CONST_MSG_ERROR_PASS = "パスワードに誤りがあります。";
    private static final String CONST_MSG_ERROR_INPUT = "入力情報に誤りがあります。";
    public static void main(String[] args) {
    final String name ="alice";
    final String pass ="pass";
    if (name.equals("alice") && pass.equals("pass") ) {
        System.out.println(CONST_MSG_SUCCESS); 
    }
    else if (name.equals("alice")){
        System.out.println(CONST_MSG_ERROR_PASS); 
    }
    else if (pass.equals("pass")){
        System.out.println(CONST_MSG_ERROR_NAME); 
    }
    else {
        System.out.println(CONST_MSG_ERROR_INPUT);
    }
    }
    }
