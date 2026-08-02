export const siteData = {
  projects: [
    //project 4
    {
      title: {
        en: "Context-Aware Japanese-English Business Communication Assistant [Ongoing]",
        jp: "文脈理解型のビジネスコミュニケーション支援アシスタント[進行中]"
      },
      desc: {
        en: "Currently developing a context-aware communication assistant that supports Japanese-English business interaction through multilingual retrieval, metadata-aware ranking, and human-in-the-loop suggestion workflows.",
        jp: "現在、多言語検索とメタデータを考慮したランキングを用いて、日英のビジネスコミュニケーションを支援する文脈理解型システムを開発しています。人による選択を前提とした支援設計を目指しています。"
      },
      tags: ["Multilingual NLP", "Reranking", "Context-Aware", "Human-in-the-Loop"],
      github: "https://github.com/adeshkumarml/Context-Aware-Business-Japanese--English-Interpreter-Assistant",
      //demo: "#"
    },
    //project 3
    {
      title: {
        en: "Aggregate Summarizer [Pilot Service]",
        jp: "AI文書要約・比較プラットフォーム [パイロット版]"
      },
      desc: {
        en: "A production-ready multi-LLM inference platform that orchestrates concurrent document summarization across multiple AI models, evaluates outputs using semantic and operational metrics, and synthesizes a consensus summary through an asynchronous document processing pipeline.",
        jp: "複数のAIモデルによる文書要約を並列実行して、意味的・運用的指標で評価した上で統合要約を生成する、本番運用を想定したマルチLLM推論プラットフォーム。"
      },
      tags: ["AI Inference", "LLM Orchestration", "Multi-LLM", "Semantic Evaluation"],
      github: "https://github.com/adeshkumarml/Aggregate-Summarizer-Dev",
      demo: "https://aggregatesummarizer.com/"
    },
    // project 2
    {
      title: {
        en: "LLM and RAG Evaluation Benchmarking Framework",
        jp: "LLM・RAG 比較評価フレームワーク"
      },
      desc: {
        en: "Designed an evaluation framework comparing standalone LLM generation and retrieval-augmented pipelines through semantic retrieval, multi-metric benchmarking and flexible local or cloud-based inference workflows, with deployment for interactive experimentation and evaluation.",
        jp: "セマンティック検索と評価指標を用いて、単独LLM生成とRAGパイプラインを比較評価できるフレームワークを設計しました。ローカルまたはクラウド環境で柔軟に検証できる構成と、実際に試行できるデプロイ環境を構築しています。"
      },
      tags: ["LLM", "RAG", "Semantic Retrieval", "Evaluation"],
      github: "https://github.com/adeshkumarml/LLM-and-RAG-Evaluation-and-Benchmarking-Framework-Development-Repo",
      demo: "https://llmragbenchmarking.streamlit.app/"
    },
    // project 1
    {
      title: {
        en: "Flight Delay Prediction System Using Pre-departure Information",
        jp: "フライト遅延予測システム"
      },
      desc: {
        en: "Built and deployed an end-to-end machine learning system, predicting flight delay risk, severity, and contributing factors. Designed reusable preprocessing and inference pipelines to ensure consistent predictions across training and deployment environments.",
        jp: "出発前の情報を用いて、フライト遅延のリスク、深刻度、要因を予測する機械学習システムを構築しました。学習環境と推論環境で一貫した予測を行えるよう、再利用可能な前処理と推論パイプラインを設計しています。"
      },
      tags: ["ML", "Predictive Modeling", "Feature Engineering"],
      github: "https://github.com/adeshkumarml/End-to-End-Flight-Delay-Prediction-System---Development-Repo",
      demo: "https://aksflightdelayrisksevcausespred.streamlit.app/"
    },
  ],

  contact: {
    github: "https://github.com/adeshkumarml",
    linkedin: "https://linkedin.com/in/adeshkumarml",
    email: "mailto:adesh.ks2002@gmail.com?subject=Inquiry%20from%20Portfolio",
  },
}