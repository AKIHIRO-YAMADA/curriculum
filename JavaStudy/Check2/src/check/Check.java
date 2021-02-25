package check;

public class Check {

	public static void main(String[] args) {
		//①【Check.java】にてフィールド変数firstNameとlastNameを宣言し、
		//firstName →　自分の名字　lastName →　自分の名前で初期化しなさい。
		//なお、変数のアクセス修飾子は「private」とする。
		private String firstName = "山田";
		 private String lastName = "晃大";
		 System.out.println("printNameメソッド　→　" + printName(firstName, lastName));
	     //③【Check.java】にてPetクラスとRobotPetクラスをインスタンス化して、下記の完成イメージを出力させなさい。
	     Pet pet = new Pet("java吉","hoge");
		 pet.introduce();
		 RobotPet robotPet = new RobotPet("R2D2","ルーク");
		 robotPet.introduce();
	}
		//②Check.java】にてfirstNameとlastNameを引数で受け取って、
		//連結して表示させるメソッド「printName」を作成しなさい。
		//作成した関数のアクセス修飾子は「private」とする。
		 private static String printName(String firstName, String lastName) {
				return firstName + lastName;
			}



}
