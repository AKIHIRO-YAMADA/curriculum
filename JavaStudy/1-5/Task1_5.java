public class Task1_5 {
    public static void main(String[] args) {
        String[] fruits = {"みかん", "りんご", "ぶどう", "メロン"};
        for (int q = 0; q < 4; q++){
            System.out.println(fruits[q]);
        }
        //iが100以下の場合処理が継続される
        int i = 1;
        while(i <= 100) {
          System.out.print(i);
          i++;
        }
        System.out.println();
        
        for(int b=0;b<10;b++){
            System.out.print(b);
        }
        for (int c = 1; c <= 9; c++) {
            for (int j = 1; j <= 9; j++) {
                System.out.print(c*j + "|");
            }
            System.out.println();
        
    }
    }
}
