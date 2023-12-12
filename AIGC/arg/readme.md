- google api
    - serpapi search_google_news
    - 数据转换 [item['link'] for item in result['news_results']]

- LLM 
    当它上线的那一刻，它的训练已经完成，只能基于它拥有的知识去推理
    如何让大模型拿到最新的信息来生成内容？
    - 大模型黑盒子 prompt 详细一些，分步，目标、
    - 不能胡说八道，但我们要写文章利用大模型AIGC能力
        让prompt拥有这个内容，agent tool

- AugoGen
    请一个管家UerProxyAgent 接受用户的任务
    AssistantAgent 做具体任务， 写代码， 

