# Hugging Face 抱抱脸
全球最大的大模型社区
## transformers 库
### NLP 任务
- 情感分析
- colab
    google 提供的在线NLP平台
    . i p y n b  n o t e b o o k
- pipeline 核心模块，启动模块
    水管子

- pipeline(task,model)
    遥遥领先  中文模型

- !pip install transformers//导入transformers
 from transformers import pipeline   #pipeline 加载器模块 加载各种NLP任务
# 定义了一个变量
classifier = pipeline('sentiment-analysis') #pipeline 情感分析功能 好与坏
result =  classifier('I love you')
result
[{'label': 'POSITIVE', 'score': 0.9998656511306763}]


result =  classifier('I hate you')
result
[{'label': 'NEGATIVE', 'score': 0.9991129040718079}]

