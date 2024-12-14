# prompt Enginner

## LLM: Large Language Model
- 背景：LLM 通常基于 变换器架构（Transformer），已成为现代自然语言处理任务的主流架构。变换器架构通过自注意力机制（self-attention）有效处理长距离依赖关系，具有很好的并行性和计算效率。
- 应用领域：
    - 对话系统：像 ChatGPT 就是基于 LLM 的应用，能够进行自然语言的对话。
    - 文本生成：可以用于自动写作、代码生成、创意写作等。
    - 机器翻译：将一种语言翻译为另一种语言。
    - 情感分析：对文本中的情感进行分类或分析。
    - 文本摘要：从长文本中提取关键信息并生成摘要。
- NLP 任务
    - taskid 任务id
    - token 模型
    - timestamp 时间戳
- 导入 transformers 库
    - !pip install transformers
- pipeline：加载器模块，加载各种NLP任务
    - from transformers import pipeline

## LangChain
- 介绍：是一个开源的框架，旨在帮助开发者更轻松地构建和部署基于大语言模型（LLM）和其他人工智能工具的应用。它提供了一些工具和模块，使开发者能够高效地集成、操作和扩展各种 LLM（如 GPT、LLama、BERT 等）以及其他外部系统（如数据库、API、文件系统等）。
- LangChain 的构建块：
    - Chains：将多个步骤（如调用模型、操作数据、执行任务等）组合成一个序列，支持自定义的工作流。
    - Agents：根据需求动态选择适合的操作（如使用模型、数据库、外部API等），可以自动选择并执行多个任务。
    - Memory：在对话和任务中跟踪和保存上下文，使得系统可以记住历史信息，并据此做出更智能的响应。
    - Tools：集成外部工具（如数据库、API、文件读取等），使 LLM 能够在外部资源中获取和操作数据。
    - Prompts：提供更细粒度的控制，以便开发者能够更精准地设计模型输入，提升模型的效果和结果。

## AIGC 学习方向的设计
- openai：强大的 api 和 LLM 能力，AI应用开发的基础，很强的 prompt engineer 能力
- transformers：LLM 的底层实现，细节，情感分析等
- langchain：AI开发框架

## HuggingFace 抱抱脸
- 全球最大的大模型社区