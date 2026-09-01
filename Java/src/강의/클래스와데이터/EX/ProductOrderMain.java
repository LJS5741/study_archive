package 강의.클래스와데이터.EX;

public class ProductOrderMain {
    public static void main(String[] args) {
        ProductOrder[] orders = new ProductOrder[3];

        ProductOrder order1 = new ProductOrder();
        order1.productName = "두부";
        order1.price = 2000;
        order1.quantity = 2;
        orders[0] = order1;

        ProductOrder order2 = new ProductOrder();
        order1.productName = "두부";
        order1.price = 2000;
        order1.quantity = 2;
        orders[1] = order1;

        ProductOrder order3 = new ProductOrder();
        order1.productName = "두부";
        order1.price = 2000;
        order1.quantity = 2;
        orders[2] = order1;

        int totalAmaount = 0;
        for (ProductOrder order : orders) {
            System.out.println("상품명 : " + order.productName + ", 가격 : " + order.price + ", 수량 : " + order.quantity);
            totalAmaount += order.price * order.quantity;
        }

        System.out.println("총 결제 금액 : " + totalAmaount);
    }
}
