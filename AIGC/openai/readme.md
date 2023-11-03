# 跨境电商
AI 开店
玩具店 -> 拼夕夕的海外版
- 翻译？ NLP 不用google 翻译，写程序
    pipeline('translate')
    AIGC 生成
- 卖什么货？
- 卖多少钱
- 营销内容怎么写有搞头

- 如何让openai 帮你开店
    大模型 + Prompt Engineer

## Prompt 工程
会问问题的人比解决问题的更nb
大模型超越了大部分人的能力

## openai 封装的过程
人生苦短 我用python
特别适合nlp
一个功能写法就一种
风格 缩进
def get_responce(prompt):
    调用了openai库的Completions模块（其他模块）.create方法
    向openai 发出网路请求
    completion = openai.Completion.create( 
        engine=,
        prompt=,吴恩达prompt
        temperature=0, 自由度，0为严格要求按照实际情况进行编写
        max_tokens=512,限制字数
    )
    <!-- 同步的  js 异步的 -->
    print(completion)
    result = completions[0].choices.text
    return result


from transformers import pipeline 
translator = pipeline('translation_en_to_fr')
result = translator("Hugging Face is a technology company based in New York and Paris",
                    max_length=40)
print(result)