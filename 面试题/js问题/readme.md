# 1.js数组上有哪些方法？
1. 增加：push()、unshift()、splice()、concat()
2. 删除：shift()、pop()、splice()、slice()
3. 修改：reverse()、sort()
4. 查找：indexOf()、lastIndexOf()、includes()、find()
5. 转换：join()
6. 迭代：forEach()、map()、filter()、some()、every()
7. 其他：Array.from() // 从可迭代的对象构造一个新的数组实例
        Array.of() // 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型

1. shift // 移除数组第一个元素并返回该元素的值
2. unshift // 在数组的开头添加一个或多个元素，并返回新的长度
3. pop // 移除数组最后一个元素并返回该元素的值
4. push // 在数组的末尾添加一个或多个元素，并返回新的长度
5. splice // 删除元素、插入元素、替换元素
6. reverse // 反转数组元素的顺序
7. sort // 对数组元素进行排序
8. concat // 合并两个或多个数组，并返回一个新的数组
9. slice // 选择数组的某个片段，并返回一个新的数组
10. indexOf // 返回某个指定的元素在数组中的索引值，如果找不到该元素，则返回-1
11. lastIndexOf // 返回某个指定的元素在数组中的最后一个的索引值，如果找不到该元素，则返回-1
12. includes // 判断某个元素是否在数组中，返回true或false
13. forEach // 遍历数组的所有元素并执行回调函数
14. map // 遍历数组的所有元素并执行回调函数，返回一个新的数组
15. filter // 遍历数组的所有元素并执行回调函数，返回一个新的数组，新数组中的元素是通过回调函数的判断条件全部筛选出来的
16. some // 遍历数组的所有元素并执行回调函数，返回true或false，只要有一个元素通过了回调函数的判断，就返回true
17. every // 遍历数组的所有元素并执行回调函数，返回true或false，只要有一个元素没有通过回调函数的判断，就返回false
18. join // 将数组的所有元素连接成一个字符串并返回这个字符串

# 2. js字符串有哪些方法？
1. 增加：concat()
2. 删除：slice()、substring()、substr()
3. 修改：replace()、toLowerCase()、toUpperCase()、trim()、trimLeft()、trimRight()、padStart()、padEnd()
4. 查找：indexOf()、lastIndexOf()、includes()、find()、endWith()、startWith()

在JavaScript中，字符串具有以下内置方法：

1. `charAt(index)`：返回指定索引处的字符。
2. `charCodeAt(index)`：返回指定索引处的字符的Unicode编码。
3. `concat(str)`：将另一个字符串连接到当前字符串。
4. `endsWith(search)`：检查字符串是否以指定字符串结尾。
5. `every(callback)`：检查字符串中的每个字符是否满足给定的回调函数。
6. `filter(callback)`：过滤字符串中的字符，只保留满足回调函数的字符。
7. `fromCharCode(code)`：根据Unicode编码将字符转换为字符串。
8. `includes(search)`：检查字符串是否包含指定字符串。
9. `indexOf(search)`：返回指定字符串在字符串中的首次出现位置。
10. `lastIndexOf(search)`：返回指定字符串在字符串中的最后一次出现位置。
11. `localeCompare(locale)`：比较两个字符串，根据指定的语言环境返回一个负数、零或正数。
12. `match(regex)`：根据正则表达式匹配字符串。
13. `normalize(form)`：根据指定的Unicode字符集标准将字符串标准化。
14. `repeat(count)`：将字符串重复指定次数。
15. `replace(regex, str)`：用另一个字符串替换所有匹配正则表达式的字符。
16. `search(regex)`：根据正则表达式搜索字符串。
17. `slice(start, end)`：返回字符串的一部分。
18. `split(separator, limit)`：根据指定的分隔符将字符串分割成子字符串。
19. `substring(start, end)`：返回字符串的一部分，范围从指定的start到指定的end。
20. `toCharCode(code)`：将字符转换为Unicode编码。
21. `toLocaleLowerCase()`：将字符串转换为本地小写。
22. `toLocaleUpperCase()`：将字符串转换为本地大写。
23. `toLowerCase()`：将字符串转换为小写。
24. `toUpperCase()`：将字符串转换为大写。
25. `trim()`：删除字符串首尾的空白字符。

# 3. 谈谈js中的类型转换机制
- 是什么？
    js中有原始类型和引用类型：
    原始类型：
        - number    - string    - symbol    - boolean   - null  - undefined - BigInt
    引用类型：
        - object    - function  - array     - Date      - RegExp( 正则表达式)   - Set    - Map
    通常开发过程中，会用到一些手段来完成逻辑开发 --- 显示类型转换，在v8执行过程中还存在另一种类型转换 --- 隐式类型转换
        - 显示类型转换：
            - Number() - String() - Boolean() - parseInt() - parseFloat() - JSON.stringify() - JSON.parse()
        - 隐式类型转换：
            - 比较运算符( > < >= <= == === != !== if while)
            - 算数运算符(+ - * / %)
            - 条件判断语句( [] == ![] 为true, [] === ![] 为true)

在ES6中，[] == ![] 的结果是 true，实际上它可以通过类型转换来解释。

首先，让我们分析一下 ![]。! 是逻辑非操作符，它会将操作数转换为布尔值并取反。因为它是一个对象，而所有对象在JavaScript中都会被视为真值。在逻辑上，空数组代表着“存在”，所以它会被转换为布尔值 true，然后取反就变成了 false。

接着，我们来看 [] == false。当使用双等号进行比较时，如果两边的操作数类型不同，JavaScript 会尝试对它们进行类型转换。在这个例子中，左边是一个对象（数组），右边是一个布尔值，JavaScript 将布尔值转换为数字，即 false 被转换为 0。

综上所述，[] == ![] 可以转换为 [] == false，进而转换为 [] == 0。接下来，JavaScript 会尝试对数组和数字进行比较，此时会将数组转换为字符串，即 ''，然后再将其转换为数字，即 0。所以最终的比较变成了 0 == 0，因此结果为 true。

这种行为可能会带来一些混淆，因此在编写代码时，最好使用严格相等操作符 === 来避免类型转换带来的意外结果。

如下：!不会触发隐式转换，而 == 触发 隐式类型转换，即引用类型转换为原始类型，用js自带的toprimitive()方法转换为原始类型
[] == ![]
[] == !true
[] == false
'' == false
0 == 0

# 4. == 和 === 的区别？
- == 是比较两个值是否相等，不考虑类型，=== 是比较两个值和类型是否相等
- == 存在类型转换
- === 不存在类型转换

# 5. 深拷贝和浅拷贝的区别？如何实现一个深拷贝？
- 深浅拷贝通常只针对引用类型

- 浅拷贝：只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型，拷贝的是引用地址，所以两个对象的引用地址是相同的
- 深拷贝：层层拷贝，拷贝 包括对象中的原始值和引用值，如果有引用类型，拷贝的是引用地址，但是两个对象的引用地址是不同的

