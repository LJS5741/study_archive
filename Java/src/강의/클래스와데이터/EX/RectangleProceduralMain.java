package 강의.클래스와데이터.EX;

public class RectangleProceduralMain {
    public static void main(String[] args) {
        RectangleProcedural rectangle = new RectangleProcedural();
        rectangle.width = 5;
        rectangle.height = 8;

        int area = rectangle.calculateArea();
        System.out.println("둘레 길이: " + area);

        int preimeter = rectangle.calculatePerimeter();
        System.out.println("둘레 길이: " + preimeter);

        boolean sqaure = rectangle.isSqaure();
        System.out.println("정사각형 여부: " + sqaure);


    }


}
