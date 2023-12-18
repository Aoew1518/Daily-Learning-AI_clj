# 基础排序
1. 冒泡排序
2. 选择排序
3. 插入排序

 # 进阶排序
 1. 快速排序
 2. 归并排序
 3. 堆排序
 4. 基数排序
# 冒泡排序

# 选择排序

```java
public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
        System.out.println("排序前：" + Arrays.toString(arr));
        selectionSort(arr);
    }

    private static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
        System.out.println("排序后：" + Arrays.toString(arr));
    }
}
```

# 插入排序

```java
public class InsertionSort {
    public static void main(String[] args)