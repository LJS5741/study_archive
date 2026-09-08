package 강의.클래스와데이터.EX;

public class Account {
    int balance;

    void deposit(int amount) {
        balance += amount;
    }

    void withdraw(int amount) {
        if (balance >= amount ) {
            balance -= amount;
        } else {
            System.out.println("잔액 부족");
        }
    }
}
