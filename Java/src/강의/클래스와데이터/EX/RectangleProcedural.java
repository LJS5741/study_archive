package 강의.클래스와데이터.EX;

public class RectangleProcedural {
    int width;
    int height;


    int calculateArea() {
        return width * height;
    }

    int calculatePerimeter() {
        return 2 * (width + height);
    }

    boolean isSqaure() {
        return width == height;
    }


}
