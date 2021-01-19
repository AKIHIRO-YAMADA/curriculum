public class Task1_5 {
    public static void main(String[] args) {
        // ① 「みかん」、「りんご」、「ぶどう」、「メロン」の値を設定した配列 fluits を作成してください。

        String[] fruits = {"みかん", "りんご", "ぶどう", "メロン"};
        // ② for文を使って①で作成した配列を出力しなさい。
        for (int q = 0; q < 4; q++){
            System.out.println(fruits[q]);
        }
        // ③ 以下のwhile文の処理について、何をしているのかコメントを記入してください。
        //iが100以下の場合処理が継続される
        int i = 1;
        while(i <= 100) {
          System.out.print(i);
          i++;
        }
        System.out.println();

    //④ Wikiに掲載されている【多重ループのプログラム例 （九九表を表示）】を参考に、
    //行の最初に「段数」と「||」を追加したものを表示させるプログラムを作成しなさい。
        
        for (int c = 1; c <= 9; c++) {
            System.out.print(c+"|");
            for (int j = 1; j <= 9; j++) {
                System.out.print("|");
                System.out.print(c*j);
            }
            System.out.println("|");
        
    }
    }
}
