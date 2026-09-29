import {
  MonthCurriculum,
  PortfolioProject,
  CapstoneDay,
  ResearchStage,
} from "../types/roadmap";

export const MONTHS_DATA: MonthCurriculum[] = [
  {
    monthNumber: 1,
    title: "Month 1 — Python, Mathematics & Data Engineering",
    subtitle: "Foundations of AI, Object-Oriented Python, NumPy, Linear Algebra, Calculus & Data Wrangling",
    description:
      "Master core Python software engineering, object-oriented concepts, matrix mathematics, calculus intuition, Pandas data analysis, statistics, visual exploratory data analysis, and Scikit-Learn data preprocessing pipelines.",
    badge: "Foundations",
    weeks: [
      {
        weekNumber: 1,
        title: "Week 1 — Python for AI Engineering",
        overview:
          "Build rock-solid Python programming fundamentals tailored specifically for AI & Machine Learning applications.",
        mainVideos: [
          {
            title: "Python for AI Engineering - Full Course",
            url: "https://youtu.be/ygXn5nV5qFc",
            youtubeId: "ygXn5nV5qFc",
          },
        ],
        days: [
          { dayNumber: 1, title: "Variables, Data Types, Control Flow & Functions", videos: [{ title: "Python Fundamentals", url: "https://youtu.be/ygXn5nV5qFc", youtubeId: "ygXn5nV5qFc" }] },
          { dayNumber: 2, title: "Data Structures: Lists, Tuples, Sets, Dictionaries", videos: [{ title: "Python Data Structures", url: "https://youtu.be/ygXn5nV5qFc", youtubeId: "ygXn5nV5qFc" }] },
          { dayNumber: 3, title: "Functional Programming, Lambda, Map, Filter, List Comprehensions", videos: [{ title: "Functional Python", url: "https://youtu.be/ygXn5nV5qFc", youtubeId: "ygXn5nV5qFc" }] },
          { dayNumber: 4, title: "Modules, Packages, Virtual Environments & Pip", videos: [{ title: "Modules & Environments", url: "https://youtu.be/ygXn5nV5qFc", youtubeId: "ygXn5nV5qFc" }] },
          { dayNumber: 5, title: "String Manipulation, Regex & Data Parsing", videos: [{ title: "Text Processing", url: "https://youtu.be/ygXn5nV5qFc", youtubeId: "ygXn5nV5qFc" }] },
          { dayNumber: 6, title: "Python Memory Model, Mutability & References", videos: [{ title: "Memory & References", url: "https://youtu.be/ygXn5nV5qFc", youtubeId: "ygXn5nV5qFc" }] },
          { dayNumber: 7, title: "Week 1 Practice Exercises & Code Challenges", videos: [{ title: "Practice & Problems", url: "https://youtu.be/ygXn5nV5qFc", youtubeId: "ygXn5nV5qFc" }] },
        ],
      },
      {
        weekNumber: 2,
        title: "Week 2 — Advanced Python, OOP & Mathematics",
        overview:
          "Object-oriented programming, file handling, NumPy arrays, Linear Algebra, and Differential Calculus for machine learning gradient descent.",
        mainVideos: [
          {
            title: "Advanced Python Masterclass",
            url: "https://youtu.be/QLTdOEn79Rc",
            youtubeId: "QLTdOEn79Rc",
          },
        ],
        days: [
          {
            dayNumber: 8,
            title: "Python OOP: Classes, Objects, Constructors, Instance vs Class Attributes",
            description: "Learn how to encapsulate ML model parameters and data classes using clean Object-Oriented paradigms.",
            videos: [
              {
                title: "Python OOP Tutorial",
                url: "https://youtu.be/HeW-D6KpDwY",
                youtubeId: "HeW-D6KpDwY",
              },
            ],
            tags: ["OOP", "Classes", "Methods"],
          },
          {
            dayNumber: 9,
            title: "Inheritance, Encapsulation, Polymorphism, Abstraction & Dunder Methods",
            description: "Master magic/dunder methods (__init__, __str__, __call__, __getitem__) and clean code abstractions.",
            videos: [
              {
                title: "OOP Concepts & Dunder Methods",
                url: "https://youtu.be/pTB0EiLXUC8",
                youtubeId: "pTB0EiLXUC8",
              },
            ],
            tags: ["Inheritance", "Polymorphism", "Dunder Methods"],
          },
          {
            dayNumber: 10,
            title: "File Handling, JSON, CSV, Exceptions, Custom Exceptions & Debugging",
            description: "Work with external data formats, create robust error handlers, and debug complex Python scripts.",
            videos: [
              {
                title: "File Handling & Exceptions",
                url: "https://youtu.be/jU0cndZziO0",
                youtubeId: "jU0cndZziO0",
              },
            ],
            tags: ["Files", "JSON", "Exceptions", "Debugging"],
          },
          {
            dayNumber: 11,
            title: "NumPy Introduction, Arrays, Dimensions, Shape & Dtype (Part 1)",
            description: "High-performance N-dimensional array creation, memory layout, vectorization, and data types.",
            videos: [
              {
                title: "NumPy Complete Playlist",
                url: "https://www.youtube.com/watch?v=ZaKzw9tULeM&list=PLjVLYmrlmjGfgBKkIFBkMNGG7qyRfo00W",
                youtubeId: "ZaKzw9tULeM",
                isPlaylist: true,
              },
            ],
            tags: ["NumPy", "Arrays", "Vectorization"],
          },
          {
            dayNumber: 12,
            title: "NumPy Indexing, Slicing, Broadcasting & Matrix Math (Part 2)",
            description: "Master multi-axis slicing, conditional masking, element-wise math, and broadcasting rules.",
            videos: [
              {
                title: "NumPy Slicing & Operations",
                url: "https://www.youtube.com/watch?v=ZaKzw9tULeM&list=PLjVLYmrlmjGfgBKkIFBkMNGG7qyRfo00W",
                youtubeId: "ZaKzw9tULeM",
                isPlaylist: true,
              },
            ],
            tags: ["NumPy", "Broadcasting", "Matrix"],
          },
          {
            dayNumber: 13,
            title: "Linear Algebra: Scalars, Vectors, Matrices, Dot Product, Transpose & Matrix Multiplication",
            description: "Essential math for neural networks: matrix products, vector spaces, dot products, and transformations.",
            videos: [
              {
                title: "Linear Algebra for ML Series",
                url: "https://www.youtube.com/watch?v=zzSJfDHiWgQ&list=PLKdU0fuY4OFct6HdBIszzy-jZlicLlkIw",
                youtubeId: "zzSJfDHiWgQ",
                isPlaylist: true,
              },
            ],
            tags: ["Linear Algebra", "Vectors", "Matrices", "Dot Product"],
          },
          {
            dayNumber: 14,
            title: "Calculus & Optimization: Derivatives, Chain Rule, Functions, Slopes & Gradient Descent",
            description: "Understand the mathematical intuition behind optimization, partial derivatives, and gradient descent updates.",
            videos: [
              { title: "Derivatives Intuition", url: "https://youtu.be/N2PpRnFqnqY", youtubeId: "N2PpRnFqnqY" },
              { title: "Chain Rule Intuition", url: "https://youtu.be/YG15m2VwSjA", youtubeId: "YG15m2VwSjA" },
              { title: "Functions & Slopes", url: "https://youtu.be/7JZ0IfCQ488", youtubeId: "7JZ0IfCQ488" },
              { title: "Understanding Slopes", url: "https://youtu.be/ADLoWIxKsyQ", youtubeId: "ADLoWIxKsyQ" },
              { title: "Gradients & Gradient Descent Intuition", url: "https://youtu.be/IHZwWFHWa-w", youtubeId: "IHZwWFHWa-w" },
            ],
            tags: ["Calculus", "Derivatives", "Chain Rule", "Gradient Descent"],
          },
        ],
      },
      {
        weekNumber: 3,
        title: "Week 3 — Pandas, Statistics & Data Visualization",
        overview:
          "Dataframes, exploratory data analysis (EDA), descriptive statistics, Matplotlib, Seaborn visualizations, and hands-on mini-project.",
        mainVideos: [
          { title: "Basic Pandas Tutorial", url: "https://youtu.be/VXtjG_GzO7Q", youtubeId: "VXtjG_GzO7Q" },
          { title: "Pandas for Data Science Playlist", url: "https://www.youtube.com/watch?v=76H-8-mi1Cc&list=PLjVLYmrlmjGdEE2jFpL71LsVH5QjDP5s4", youtubeId: "76H-8-mi1Cc", isPlaylist: true },
          { title: "Statistics for Data Science", url: "https://www.youtube.com/watch?v=8ZI55Inh1_A&list=PLeo1K3hjS3uuKaU2nBDwr6zrSOTzNCs0l", youtubeId: "8ZI55Inh1_A", isPlaylist: true },
          { title: "Matplotlib Crash Course", url: "https://youtu.be/c9vhHUGdav0", youtubeId: "c9vhHUGdav0" },
          { title: "Seaborn Data Visualization", url: "https://www.youtube.com/watch?v=hLbVXF70BCE&list=PLjVLYmrlmjGfhqSO3rF4n02rrj9w2Ch2C", youtubeId: "hLbVXF70BCE", isPlaylist: true },
          { title: "Exploratory Data Analysis (EDA) Course", url: "https://www.youtube.com/watch?v=rAI4ITRMkTY&list=PLTsu3dft3CWhLHbHTTzvG3Vx8XDWemG17", youtubeId: "rAI4ITRMkTY", isPlaylist: true },
        ],
        days: [
          { dayNumber: 15, title: "Pandas DataFrames, Series, Loading CSV/Excel & Indexing", videos: [{ title: "Basic Pandas", url: "https://youtu.be/VXtjG_GzO7Q", youtubeId: "VXtjG_GzO7Q" }] },
          { dayNumber: 16, title: "Data Wrangling: GroupBy, Aggregations, Merging & Joining", videos: [{ title: "Pandas Data Science", url: "https://www.youtube.com/watch?v=76H-8-mi1Cc&list=PLjVLYmrlmjGdEE2jFpL71LsVH5QjDP5s4", youtubeId: "76H-8-mi1Cc" }] },
          { dayNumber: 17, title: "Descriptive Statistics: Mean, Median, Variance, Std Dev, Skewness", videos: [{ title: "Statistics for Data Science", url: "https://www.youtube.com/watch?v=8ZI55Inh1_A&list=PLeo1K3hjS3uuKaU2nBDwr6zrSOTzNCs0l", youtubeId: "8ZI55Inh1_A" }] },
          { dayNumber: 18, title: "Matplotlib Plots: Lines, Bars, Histograms, Scatter Plots & Customization", videos: [{ title: "Matplotlib", url: "https://youtu.be/c9vhHUGdav0", youtubeId: "c9vhHUGdav0" }] },
          { dayNumber: 19, title: "Statistical Seaborn Visualizations: Heatmaps, Boxplots, Pairplots", videos: [{ title: "Seaborn Masterclass", url: "https://www.youtube.com/watch?v=hLbVXF70BCE&list=PLjVLYmrlmjGfhqSO3rF4n02rrj9w2Ch2C", youtubeId: "hLbVXF70BCE" }] },
          { dayNumber: 20, title: "Exploratory Data Analysis (EDA) Workflow & Data Cleaning", videos: [{ title: "EDA Guide", url: "https://www.youtube.com/watch?v=rAI4ITRMkTY&list=PLTsu3dft3CWhLHbHTTzvG3Vx8XDWemG17", youtubeId: "rAI4ITRMkTY" }] },
          { dayNumber: 21, title: "Mini-Project: Student Performance / Sales / House Prices Dataset EDA", videos: [{ title: "EDA Mini-Project Video", url: "https://www.youtube.com/watch?v=_drqJ9SFCgU&list=PLeo1K3hjS3uu7clOTtwsp94PcHbzqpAdg&index=2", youtubeId: "_drqJ9SFCgU" }] },
        ],
        miniProject: {
          title: "Mini-project: Analyze Student Performance, Sales or House Prices",
          description: "Perform end-to-end data cleaning, missing value imputation, distribution analysis, correlation matrix heatmaps, and outlier detection.",
          videos: [{ title: "Project Tutorial Video", url: "https://www.youtube.com/watch?v=_drqJ9SFCgU&list=PLeo1K3hjS3uu7clOTtwsp94PcHbzqpAdg&index=2", youtubeId: "_drqJ9SFCgU" }],
        },
      },
      {
        weekNumber: 4,
        title: "Week 4 — Data Preprocessing & Feature Engineering",
        overview:
          "Handling missing data, encoding categorical variables, scaling techniques, feature selection, and Scikit-learn Pipelines.",
        mainVideos: [
          { title: "Data Preprocessing Course", url: "https://www.youtube.com/watch?v=RmAylEut8Z8&list=PLhCoH0dN4ABfsTZlcogIuozaW28HrMWHU&index=1", youtubeId: "RmAylEut8Z8", isPlaylist: true },
          { title: "Feature Engineering Series", url: "https://www.youtube.com/watch?v=sluoVhT0ehg&list=PLKnIA16_RmvYXWH_E6PuVLLHHTWXwwDN7&index=1", youtubeId: "sluoVhT0ehg", isPlaylist: true },
          { title: "End-to-End Scikit-learn Preprocessing Project", url: "https://www.youtube.com/watch?v=iIkJrwVUl1c", youtubeId: "iIkJrwVUl1c" },
        ],
        days: [
          { dayNumber: 22, title: "Missing Value Imputation: Mean, Median, KNN & Iterative Imputer", videos: [{ title: "Data Preprocessing", url: "https://www.youtube.com/watch?v=RmAylEut8Z8&list=PLhCoH0dN4ABfsTZlcogIuozaW28HrMWHU&index=1", youtubeId: "RmAylEut8Z8" }] },
          { dayNumber: 23, title: "Categorical Encoding: One-Hot, Ordinal, Label & Target Encoding", videos: [{ title: "Feature Engineering", url: "https://www.youtube.com/watch?v=sluoVhT0ehg&list=PLKnIA16_RmvYXWH_E6PuVLLHHTWXwwDN7&index=1", youtubeId: "sluoVhT0ehg" }] },
          { dayNumber: 24, title: "Feature Scaling: StandardScaler, MinMaxScaler, RobustScaler & Normalization", videos: [{ title: "Data Preprocessing", url: "https://www.youtube.com/watch?v=RmAylEut8Z8&list=PLhCoH0dN4ABfsTZlcogIuozaW28HrMWHU&index=1", youtubeId: "RmAylEut8Z8" }] },
          { dayNumber: 25, title: "Outlier Detection & Removal: Z-score, IQR, Isolation Forest", videos: [{ title: "Outlier Handling", url: "https://www.youtube.com/watch?v=sluoVhT0ehg&list=PLKnIA16_RmvYXWH_E6PuVLLHHTWXwwDN7&index=1", youtubeId: "sluoVhT0ehg" }] },
          { dayNumber: 26, title: "Feature Extraction & Polynomial Features", videos: [{ title: "Feature Extraction", url: "https://www.youtube.com/watch?v=sluoVhT0ehg&list=PLKnIA16_RmvYXWH_E6PuVLLHHTWXwwDN7&index=1", youtubeId: "sluoVhT0ehg" }] },
          { dayNumber: 27, title: "Building Scikit-Learn Pipeline & ColumnTransformer", videos: [{ title: "End-to-End Scikit-Learn Preprocessing", url: "https://www.youtube.com/watch?v=iIkJrwVUl1c", youtubeId: "iIkJrwVUl1c" }] },
          { dayNumber: 28, title: "End-to-End Preprocessing Mini-Project Hands-On", videos: [{ title: "Preprocessing Project", url: "https://www.youtube.com/watch?v=iIkJrwVUl1c", youtubeId: "iIkJrwVUl1c" }] },
        ],
      },
    ],
  },
  {
    monthNumber: 2,
    title: "Month 2 — Core Machine Learning",
    subtitle: "Regression, Classification, Gradient Descent, Ensemble Learning, SVMs & Unsupervised Learning",
    description:
      "Deep dive into classical machine learning algorithms, cross-validation metrics, hyperparameter tuning, financial ML projects, Random Forests, XGBoost, and clustering techniques.",
    badge: "Machine Learning",
    weeks: [
      {
        weekNumber: 5,
        title: "Week 5 — Regression & Gradient Descent",
        overview:
          "Linear regression, Ridge/Lasso regularization, mathematical gradient descent optimization, and house price prediction project.",
        mainVideos: [
          { title: "Regression Algorithms Course", url: "https://www.youtube.com/watch?v=UZPfbG0jNec&list=PLKnIA16_Rmva-wY_HBh1gTH32ocu2SoTr", youtubeId: "UZPfbG0jNec", isPlaylist: true },
          { title: "Gradient Descent Detailed Guide", url: "https://www.youtube.com/watch?v=ORyfPJypKuU&t=75s", youtubeId: "ORyfPJypKuU" },
          { title: "Predict House Prices Project Series", url: "https://www.youtube.com/watch?v=vtm35gVP8JU&list=PLIF5hQPQh2zcLucXKeWf3f5qjJy0D2avO", youtubeId: "vtm35gVP8JU", isPlaylist: true },
        ],
        days: [
          { dayNumber: 29, title: "Linear Regression: Cost Function, MSE, RMSE, R-squared & Adjusted R2", videos: [{ title: "Regression Fundamentals", url: "https://www.youtube.com/watch?v=UZPfbG0jNec&list=PLKnIA16_Rmva-wY_HBh1gTH32ocu2SoTr", youtubeId: "UZPfbG0jNec" }] },
          { dayNumber: 30, title: "Batch, Stochastic & Mini-Batch Gradient Descent Mechanics", videos: [{ title: "Gradient Descent", url: "https://www.youtube.com/watch?v=ORyfPJypKuU&t=75s", youtubeId: "ORyfPJypKuU" }] },
          { dayNumber: 31, title: "Polynomial Regression & Overfitting vs Underfitting", videos: [{ title: "Regression Models", url: "https://www.youtube.com/watch?v=UZPfbG0jNec&list=PLKnIA16_Rmva-wY_HBh1gTH32ocu2SoTr", youtubeId: "UZPfbG0jNec" }] },
          { dayNumber: 32, title: "Regularization: Ridge (L2), Lasso (L1) & ElasticNet", videos: [{ title: "Regularization Techniques", url: "https://www.youtube.com/watch?v=UZPfbG0jNec&list=PLKnIA16_Rmva-wY_HBh1gTH32ocu2SoTr", youtubeId: "UZPfbG0jNec" }] },
          { dayNumber: 33, title: "House Price Dataset Preparation & Baseline Model", videos: [{ title: "House Price Project", url: "https://www.youtube.com/watch?v=vtm35gVP8JU&list=PLIF5hQPQh2zcLucXKeWf3f5qjJy0D2avO", youtubeId: "vtm35gVP8JU" }] },
          { dayNumber: 34, title: "Training Advanced Regression Models & Hyperparameter Tuning", videos: [{ title: "House Price Model Tuning", url: "https://www.youtube.com/watch?v=vtm35gVP8JU&list=PLIF5hQPQh2zcLucXKeWf3f5qjJy0D2avO", youtubeId: "vtm35gVP8JU" }] },
          { dayNumber: 35, title: "Model Comparison: Baseline vs Trained Regression Model Evaluation", videos: [{ title: "Model Evaluation", url: "https://www.youtube.com/watch?v=vtm35gVP8JU&list=PLIF5hQPQh2zcLucXKeWf3f5qjJy0D2avO", youtubeId: "vtm35gVP8JU" }] },
        ],
      },
      {
        weekNumber: 6,
        title: "Week 6 — Classification, Model Evaluation & Projects",
        overview:
          "Logistic Regression, Decision Trees, Confusion Matrix, ROC-AUC, F1-Score, FinTech ML project, and Dog vs Cat classification.",
        mainVideos: [
          { title: "Classification Complete Tutorial", url: "https://www.youtube.com/watch?v=q3OxpyIrNqw", youtubeId: "q3OxpyIrNqw" },
          { title: "Model Evaluation & Metrics Playlist", url: "https://www.youtube.com/watch?v=6W92_t9FveA&list=PLEneLIDJFpcA", youtubeId: "6W92_t9FveA", isPlaylist: true },
          { title: "Dog vs Cat Classification Project", url: "https://youtu.be/0K4J_PTgysc", youtubeId: "0K4J_PTgysc" },
          { title: "ML FinTech Project for Beginners", url: "https://youtu.be/da_xqw1oAD8", youtubeId: "da_xqw1oAD8" },
        ],
        days: [
          { dayNumber: 36, title: "Logistic Regression, Sigmoid Function, Log-Loss & Odds Ratio", videos: [{ title: "Classification Basics", url: "https://www.youtube.com/watch?v=q3OxpyIrNqw", youtubeId: "q3OxpyIrNqw" }] },
          { dayNumber: 37, title: "Decision Trees, Gini Impurity, Entropy & Information Gain", videos: [{ title: "Decision Trees", url: "https://www.youtube.com/watch?v=q3OxpyIrNqw", youtubeId: "q3OxpyIrNqw" }] },
          { dayNumber: 38, title: "Evaluation Metrics: Precision, Recall, F1-Score, Confusion Matrix", videos: [{ title: "Model Evaluation Metrics", url: "https://www.youtube.com/watch?v=6W92_t9FveA&list=PLEneLIDJFpcA", youtubeId: "6W92_t9FveA" }] },
          { dayNumber: 39, title: "ROC Curve, AUC, PR Curves & Threshold Tuning", videos: [{ title: "ROC AUC & Thresholds", url: "https://www.youtube.com/watch?v=6W92_t9FveA&list=PLEneLIDJFpcA", youtubeId: "6W92_t9FveA" }] },
          { dayNumber: 40, title: "Cross-Validation: K-Fold, Stratified K-Fold & TimeSeriesSplit", videos: [{ title: "Cross Validation", url: "https://www.youtube.com/watch?v=6W92_t9FveA&list=PLEneLIDJFpcA", youtubeId: "6W92_t9FveA" }] },
          { dayNumber: 41, title: "Dog vs Cat Classification Project Implementation", videos: [{ title: "Dog vs Cat Project", url: "https://youtu.be/0K4J_PTgysc", youtubeId: "0K4J_PTgysc" }] },
          { dayNumber: 42, title: "ML FinTech Credit Risk / Fraud Detection Project", videos: [{ title: "FinTech Project", url: "https://youtu.be/da_xqw1oAD8", youtubeId: "da_xqw1oAD8" }] },
        ],
      },
      {
        weekNumber: 7,
        title: "Week 7 — Ensemble Learning & Support Vector Machines (SVM)",
        overview:
          "Bagging, Random Forests, Boosting (AdaBoost, Gradient Boosting, XGBoost, LightGBM), and SVM kernels.",
        mainVideos: [
          { title: "Ensemble Learning Series", url: "https://www.youtube.com/watch?v=bHK1fE_BUms&list=PLnD9uS5lPM6l3oB5aPLTA8uUTayvLDF5T", youtubeId: "bHK1fE_BUms", isPlaylist: true },
          { title: "Support Vector Machines (SVM) Course", url: "https://www.youtube.com/watch?v=ugTxMLjLS8M&list=PLKnIA16_RmvbOIFee-ra7U6jR2oIbCZBL", youtubeId: "ugTxMLjLS8M", isPlaylist: true },
        ],
        days: [
          { dayNumber: 43, title: "Ensemble Concepts: Voting Classifiers, Averaging & Stacking", videos: [{ title: "Ensemble Learning", url: "https://www.youtube.com/watch?v=bHK1fE_BUms&list=PLnD9uS5lPM6l3oB5aPLTA8uUTayvLDF5T", youtubeId: "bHK1fE_BUms" }] },
          { dayNumber: 44, title: "Bagging & Random Forests: Out-of-Bag (OOB) Score & Feature Importance", videos: [{ title: "Random Forest", url: "https://www.youtube.com/watch?v=bHK1fE_BUms&list=PLnD9uS5lPM6l3oB5aPLTA8uUTayvLDF5T", youtubeId: "bHK1fE_BUms" }] },
          { dayNumber: 45, title: "Boosting Principles: AdaBoost Algorithm & Sequential Weight Updates", videos: [{ title: "AdaBoost", url: "https://www.youtube.com/watch?v=bHK1fE_BUms&list=PLnD9uS5lPM6l3oB5aPLTA8uUTayvLDF5T", youtubeId: "bHK1fE_BUms" }] },
          { dayNumber: 46, title: "Gradient Boosting & XGBoost Hyperparameter Optimization", videos: [{ title: "XGBoost", url: "https://www.youtube.com/watch?v=bHK1fE_BUms&list=PLnD9uS5lPM6l3oB5aPLTA8uUTayvLDF5T", youtubeId: "bHK1fE_BUms" }] },
          { dayNumber: 47, title: "Support Vector Machines: Maximum Margin Hyperplane & Soft Margin C Parameter", videos: [{ title: "SVM Basics", url: "https://www.youtube.com/watch?v=ugTxMLjLS8M&list=PLKnIA16_RmvbOIFee-ra7U6jR2oIbCZBL", youtubeId: "ugTxMLjLS8M" }] },
          { dayNumber: 48, title: "SVM Kernels: Linear, Polynomial, RBF (Radial Basis Function) Trick", videos: [{ title: "SVM Kernels", url: "https://www.youtube.com/watch?v=ugTxMLjLS8M&list=PLKnIA16_RmvbOIFee-ra7U6jR2oIbCZBL", youtubeId: "ugTxMLjLS8M" }] },
          { dayNumber: 49, title: "Comparing Random Forest, XGBoost & SVM on Benchmark Datasets", videos: [{ title: "Model Comparison", url: "https://www.youtube.com/watch?v=bHK1fE_BUms&list=PLnD9uS5lPM6l3oB5aPLTA8uUTayvLDF5T", youtubeId: "bHK1fE_BUms" }] },
        ],
      },
      {
        weekNumber: 8,
        title: "Week 8 — Unsupervised Learning & End-to-End ML Projects",
        overview:
          "K-Means clustering, Hierarchical clustering, PCA dimension reduction, DBSCAN, and real-world ML project implementations.",
        mainVideos: [
          { title: "Unsupervised Learning Algorithms", url: "https://www.youtube.com/watch?v=HLqH58OgCMc&list=PLWPirh4EWFpEjbNicXUZk0wrPBzBlAlU_&index=1", youtubeId: "HLqH58OgCMc", isPlaylist: true },
          { title: "End-to-End Machine Learning Projects Playlist", url: "https://www.youtube.com/watch?v=1xtrIEwY_zY&list=PLKnIA16_RmvY5eP91BGPa0vXUYmIdtfPQ", youtubeId: "1xtrIEwY_zY", isPlaylist: true },
        ],
        days: [
          { dayNumber: 50, title: "K-Means Clustering: Elbow Method & Silhouette Score Analysis", videos: [{ title: "K-Means", url: "https://www.youtube.com/watch?v=HLqH58OgCMc&list=PLWPirh4EWFpEjbNicXUZk0wrPBzBlAlU_&index=1", youtubeId: "HLqH58OgCMc" }] },
          { dayNumber: 51, title: "Hierarchical Agglomerative Clustering & Dendrogram Interpretation", videos: [{ title: "Hierarchical Clustering", url: "https://www.youtube.com/watch?v=HLqH58OgCMc&list=PLWPirh4EWFpEjbNicXUZk0wrPBzBlAlU_&index=1", youtubeId: "HLqH58OgCMc" }] },
          { dayNumber: 52, title: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)", videos: [{ title: "DBSCAN", url: "https://www.youtube.com/watch?v=HLqH58OgCMc&list=PLWPirh4EWFpEjbNicXUZk0wrPBzBlAlU_&index=1", youtubeId: "HLqH58OgCMc" }] },
          { dayNumber: 53, title: "Dimensionality Reduction: Principal Component Analysis (PCA) & Variance Ratio", videos: [{ title: "PCA Tutorial", url: "https://www.youtube.com/watch?v=HLqH58OgCMc&list=PLWPirh4EWFpEjbNicXUZk0wrPBzBlAlU_&index=1", youtubeId: "HLqH58OgCMc" }] },
          { dayNumber: 54, title: "t-SNE & UMAP for High-Dimensional Data Visualization", videos: [{ title: "t-SNE & Dimensionality Reduction", url: "https://www.youtube.com/watch?v=HLqH58OgCMc&list=PLWPirh4EWFpEjbNicXUZk0wrPBzBlAlU_&index=1", youtubeId: "HLqH58OgCMc" }] },
          { dayNumber: 55, title: "End-to-End ML Project: Problem Formulation & Architecture Setup", videos: [{ title: "ML Project Architecture", url: "https://www.youtube.com/watch?v=1xtrIEwY_zY&list=PLKnIA16_RmvY5eP91BGPa0vXUYmIdtfPQ", youtubeId: "1xtrIEwY_zY" }] },
          { dayNumber: 56, title: "End-to-End ML Project: Model Deployment & Evaluation Report", videos: [{ title: "ML Projects Series", url: "https://www.youtube.com/watch?v=1xtrIEwY_zY&list=PLKnIA16_RmvY5eP91BGPa0vXUYmIdtfPQ", youtubeId: "1xtrIEwY_zY" }] },
        ],
      },
    ],
  },
  {
    monthNumber: 3,
    title: "Month 3 — Deep Learning, Computer Vision & NLP",
    subtitle: "Neural Networks, PyTorch, CNNs, Transfer Learning, RNNs, LSTMs & Transformer Architecture",
    description:
      "Master deep learning neural network training, PyTorch tensors, autograd backpropagation, Convolutional Neural Networks (CNNs), ResNet transfer learning, NLP text embeddings, and self-attention Transformer mechanisms.",
    badge: "Deep Learning",
    weeks: [
      {
        weekNumber: 9,
        title: "Week 9 — Deep Learning Foundations",
        overview:
          "Understand how a neural network makes a prediction, measures error via loss functions, and updates its weights via backpropagation.",
        mainVideos: [
          { title: "Deep Learning Foundations Series", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg", isPlaylist: true },
        ],
        days: [
          { dayNumber: 57, title: "Perceptrons & Artificial Neurons: Weights, Biases & Linear Combination", videos: [{ title: "Deep Learning Foundations", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg" }] },
          { dayNumber: 58, title: "Activation Functions: Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax", videos: [{ title: "Activation Functions", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg" }] },
          { dayNumber: 59, title: "Forward Propagation & Loss Functions (MSE, Cross-Entropy Loss)", videos: [{ title: "Forward Pass & Loss", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg" }] },
          { dayNumber: 60, title: "Backpropagation Mathematical Derivation & Computational Graph", videos: [{ title: "Backpropagation", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg" }] },
          { dayNumber: 61, title: "Optimizers: SGD, Momentum, RMSprop, Adam, AdamW", videos: [{ title: "Optimizers", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg" }] },
          { dayNumber: 62, title: "Regularization in Neural Networks: Dropout, Batch Normalization, Weight Decay", videos: [{ title: "DL Regularization", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg" }] },
          { dayNumber: 63, title: "Building a Simple Neural Network from Scratch in Pure Python & NumPy", videos: [{ title: "NN from Scratch", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=1", youtubeId: "2dH_qjc9mFg" }] },
        ],
      },
      {
        weekNumber: 10,
        title: "Week 10 — PyTorch & Neural Network Training",
        overview:
          "PyTorch tensors, autograd, nn.Module, Dataset/DataLoader, MLP model training on MNIST / Fashion-MNIST.",
        mainVideos: [
          { title: "PyTorch Course Series", url: "https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7", youtubeId: "QZsguRbcOBM", isPlaylist: true },
          { title: "Neural Network Training PyTorch", url: "https://www.youtube.com/watch?v=Wo5dMEP_BbI&list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3", youtubeId: "Wo5dMEP_BbI", isPlaylist: true },
          { title: "Alternative PyTorch NN Tutorial", url: "https://www.youtube.com/watch?v=XJ7HLz9VYz0&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=1", youtubeId: "XJ7HLz9VYz0", isPlaylist: true },
          { title: "Train MLP on MNIST / Fashion-MNIST", url: "https://www.youtube.com/watch?v=33ysE1Gt1G4", youtubeId: "33ysE1Gt1G4" },
        ],
        days: [
          { dayNumber: 64, title: "PyTorch Basics: Tensors, CUDA/GPU Acceleration & Autograd Engine", videos: [{ title: "PyTorch Tensors", url: "https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7", youtubeId: "QZsguRbcOBM" }] },
          { dayNumber: 65, title: "Building PyTorch Custom Models with nn.Module & nn.Sequential", videos: [{ title: "PyTorch nn.Module", url: "https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7", youtubeId: "QZsguRbcOBM" }] },
          { dayNumber: 66, title: "PyTorch Dataset, DataLoader, Batching & Transforms", videos: [{ title: "PyTorch Data Loading", url: "https://www.youtube.com/watch?v=Wo5dMEP_BbI&list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3", youtubeId: "Wo5dMEP_BbI" }] },
          { dayNumber: 67, title: "Writing Training & Validation Loops in PyTorch", videos: [{ title: "PyTorch Training Loop", url: "https://www.youtube.com/watch?v=Wo5dMEP_BbI&list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3", youtubeId: "Wo5dMEP_BbI" }] },
          { dayNumber: 68, title: "Saving & Loading Model Checkpoints (state_dict vs full model)", videos: [{ title: "PyTorch Model Saving", url: "https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7", youtubeId: "QZsguRbcOBM" }] },
          { dayNumber: 69, title: "Training an MLP on MNIST or Fashion-MNIST Dataset", videos: [{ title: "MNIST MLP Training", url: "https://www.youtube.com/watch?v=33ysE1Gt1G4", youtubeId: "33ysE1Gt1G4" }] },
          { dayNumber: 70, title: "MLP Hyperparameter Experimentation & Learning Rate Scheduling", videos: [{ title: "Hyperparameter Tuning PyTorch", url: "https://www.youtube.com/watch?v=33ysE1Gt1G4", youtubeId: "33ysE1Gt1G4" }] },
        ],
      },
      {
        weekNumber: 11,
        title: "Week 11 — CNN, Transfer Learning & Computer Vision",
        overview:
          "Convolutional operations, Pooling, ResNet fine-tuning, Computer Vision, and Defect Classification PyTorch Project.",
        mainVideos: [
          { title: "Convolutional Neural Networks (CNN)", url: "https://www.youtube.com/watch?v=hDVFXf74P-U&list=PLGP2q2bIgaNzhSv4yMX6yPxwQ0mk4CPwS", youtubeId: "hDVFXf74P-U", isPlaylist: true },
          { title: "Transfer Learning Deep Dive", url: "https://youtu.be/WWcgHjuKVqA", youtubeId: "WWcgHjuKVqA" },
          { title: "Computer Vision Playlist", url: "https://www.youtube.com/watch?v=WIijsBeggLY&list=PLbIeWYnnFbsMzhiMvspTqd1G-PqogzdHT", youtubeId: "WIijsBeggLY", isPlaylist: true },
          { title: "Defect Classification using PyTorch & CNNs", url: "https://www.youtube.com/watch?v=dGtDTjYs3xc&list=PLeo1K3hjS3ut49PskOfLnE6WUoOp_2lsD&index=1", youtubeId: "dGtDTjYs3xc", isPlaylist: true },
        ],
        days: [
          { dayNumber: 71, title: "CNN Building Blocks: Convolutions, Kernels, Stride, Padding & Feature Maps", videos: [{ title: "CNN Basics", url: "https://www.youtube.com/watch?v=hDVFXf74P-U&list=PLGP2q2bIgaNzhSv4yMX6yPxwQ0mk4CPwS", youtubeId: "hDVFXf74P-U" }] },
          { dayNumber: 72, title: "Pooling Layers (Max, Average Pooling) & Receptive Fields", videos: [{ title: "CNN Layers & Pooling", url: "https://www.youtube.com/watch?v=hDVFXf74P-U&list=PLGP2q2bIgaNzhSv4yMX6yPxwQ0mk4CPwS", youtubeId: "hDVFXf74P-U" }] },
          { dayNumber: 73, title: "CNN Architectures: AlexNet, VGG16, ResNet (Residual Connections)", videos: [{ title: "ResNet & CNN Architectures", url: "https://www.youtube.com/watch?v=WIijsBeggLY&list=PLbIeWYnnFbsMzhiMvspTqd1G-PqogzdHT", youtubeId: "WIijsBeggLY" }] },
          { dayNumber: 74, title: "Transfer Learning: Feature Extraction vs Fine-Tuning Pretrained Weights", videos: [{ title: "Transfer Learning", url: "https://youtu.be/WWcgHjuKVqA", youtubeId: "WWcgHjuKVqA" }] },
          { dayNumber: 75, title: "Image Data Augmentation (Torchvision Transforms, Albumentations)", videos: [{ title: "Image Augmentations", url: "https://www.youtube.com/watch?v=WIijsBeggLY&list=PLbIeWYnnFbsMzhiMvspTqd1G-PqogzdHT", youtubeId: "WIijsBeggLY" }] },
          { dayNumber: 76, title: "Application Defect Classification Project Setup & PyTorch Model", videos: [{ title: "Defect Classification Project", url: "https://www.youtube.com/watch?v=dGtDTjYs3xc&list=PLeo1K3hjS3ut49PskOfLnE6WUoOp_2lsD&index=1", youtubeId: "dGtDTjYs3xc" }] },
          { dayNumber: 77, title: "Defect Classifier Evaluation, Confusion Matrix & Model Export", videos: [{ title: "Defect Classifier Evaluation", url: "https://www.youtube.com/watch?v=dGtDTjYs3xc&list=PLeo1K3hjS3ut49PskOfLnE6WUoOp_2lsD&index=1", youtubeId: "dGtDTjYs3xc" }] },
        ],
      },
      {
        weekNumber: 12,
        title: "Week 12 — NLP, RNNs & Transformers",
        overview:
          "Tokenization, Word Embeddings, Recurrent Neural Networks (RNN/LSTM/GRU), Attention Mechanism, and Transformer Architecture.",
        mainVideos: [
          { title: "NLP Masterclass", url: "https://www.youtube.com/watch?v=zlUpTlaxAKI&list=PLKnIA16_RmvZo7fp5kkIth6nRTeQQsjfX", youtubeId: "zlUpTlaxAKI", isPlaylist: true },
          { title: "RNNs & LSTMs Series", url: "https://www.youtube.com/watch?v=4KpRP-YUw6c&list=PLGP2q2bIgaNzBBpxxNUf126chLsQ20dfG", youtubeId: "4KpRP-YUw6c", isPlaylist: true },
          { title: "Illustrated Guide to Transformers", url: "https://www.youtube.com/watch?v=BjRVS2wTtcA", youtubeId: "BjRVS2wTtcA" },
          { title: "Transformers Code Walkthrough", url: "https://www.youtube.com/watch?v=XnGGmvpDLA0", youtubeId: "XnGGmvpDLA0" },
          { title: "Attention Mechanism Explained", url: "https://www.youtube.com/watch?v=-tCKPl_8Xb8", youtubeId: "-tCKPl_8Xb8" },
          { title: "Self-Attention Math Deep Dive", url: "https://www.youtube.com/watch?v=r7mAt0iVqwo", youtubeId: "r7mAt0iVqwo" },
          { title: "BERT & GPT Architectures", url: "https://www.youtube.com/watch?v=5ZgGuujZSbs", youtubeId: "5ZgGuujZSbs" },
          { title: "Hugging Face Transformers Tutorial", url: "https://www.youtube.com/watch?v=o4ZVA0TuDRg", youtubeId: "o4ZVA0TuDRg" },
        ],
        days: [
          { dayNumber: 78, title: "Text Preprocessing: Tokenization, Stemming, Lemmatization & Stopwords", videos: [{ title: "NLP Basics", url: "https://www.youtube.com/watch?v=zlUpTlaxAKI&list=PLKnIA16_RmvZo7fp5kkIth6nRTeQQsjfX", youtubeId: "zlUpTlaxAKI" }] },
          { dayNumber: 79, title: "Text Representations: Bag of Words, TF-IDF & N-grams", videos: [{ title: "TF-IDF & Vectorization", url: "https://www.youtube.com/watch?v=ATK6fm3cYfI", youtubeId: "ATK6fm3cYfI" }] },
          { dayNumber: 80, title: "Word Embeddings: Word2Vec (CBOW, Skip-Gram), GloVe & FastText", videos: [{ title: "Word Embeddings", url: "https://www.youtube.com/watch?v=R-AG4-qZs1A&list=PLeo1K3hjS3uuvuAXhYjV2lMEShq2UYSwX", youtubeId: "R-AG4-qZs1A" }] },
          { dayNumber: 81, title: "Recurrent Neural Networks (RNN) & Vanishing Gradient Problem", videos: [{ title: "RNN Fundamentals", url: "https://www.youtube.com/watch?v=4KpRP-YUw6c&list=PLGP2q2bIgaNzBBpxxNUf126chLsQ20dfG", youtubeId: "4KpRP-YUw6c" }] },
          { dayNumber: 82, title: "LSTM (Long Short-Term Memory) & GRU Gated Networks", videos: [{ title: "LSTMs & GRUs", url: "https://www.youtube.com/watch?v=4KpRP-YUw6c&list=PLGP2q2bIgaNzBBpxxNUf126chLsQ20dfG", youtubeId: "4KpRP-YUw6c" }] },
          { dayNumber: 83, title: "Self-Attention Mechanism & Transformer Encoder/Decoder Architecture", videos: [{ title: "Transformer Architecture", url: "https://www.youtube.com/watch?v=BjRVS2wTtcA", youtubeId: "BjRVS2wTtcA" }] },
          { dayNumber: 84, title: "Text Classification Project: TF-IDF + Logistic Regression vs Transformer", videos: [{ title: "Sentiment Analysis Project", url: "https://www.youtube.com/watch?v=jY6oEug1H9I&list=PL495mke12zYDPRGhXd6JGY5EUoksIVwYU", youtubeId: "jY6oEug1H9I" }] },
        ],
        miniProject: {
          title: "Main Project: Text Classification & Sentiment Analysis Comparison",
          description: "Compare baseline TF-IDF + Logistic Regression against an embedding-based or neural Transformer model.",
          videos: [
            { title: "Sentiment Analysis Tutorial", url: "https://www.youtube.com/watch?v=jY6oEug1H9I&list=PL495mke12zYDPRGhXd6JGY5EUoksIVwYU", youtubeId: "jY6oEug1H9I" },
            { title: "TF-IDF vs Embeddings", url: "https://www.youtube.com/watch?v=ATK6fm3cYfI", youtubeId: "ATK6fm3cYfI" },
          ],
        },
      },
    ],
  },
  {
    monthNumber: 4,
    title: "Month 4 — LLMs, RAG, AI Agents & Production Deployment",
    subtitle: "Large Language Models, OpenAI APIs, FastAPI, Vector DBs, LangChain, LangGraph, Docker & AWS EC2",
    description:
      "Build cutting-edge Generative AI applications: Retrieval-Augmented Generation (RAG) with ChromaDB, local LLMs (Ollama), multi-step AI Agents with LangGraph tool calling, FastAPI backend microservices, Docker containerization, and EC2 deployment.",
    badge: "GenAI & MLOps",
    weeks: [
      {
        weekNumber: 13,
        title: "Week 13 — LLM Foundations, APIs & FastAPI",
        overview:
          "LLM parameters (temperature, top_p, max tokens), OpenAI Agent SDK, FastAPI async endpoints, environment variables, rate limiting, and AI Study Assistant API.",
        mainVideos: [
          { title: "LLM Foundations Series", url: "https://www.youtube.com/watch?v=Xpr8D6LeAtw&list=PLPTV0NXA_ZSgsLAr8YCgCwhPIJNNtexWu", youtubeId: "Xpr8D6LeAtw", isPlaylist: true },
          { title: "RAG Foundations Playlist", url: "https://www.youtube.com/watch?v=fZM3oX4xEyg&list=PLZoTAELRMXVM8Pf4U67L4UuDRgV4TNX9D", youtubeId: "fZM3oX4xEyg", isPlaylist: true },
          { title: "AI Agents Fundamentals", url: "https://www.youtube.com/watch?v=OhI005_aJkA&list=PLlrxD0HtieHgKcRjd5-8DT9TbwdlDO-OC", youtubeId: "OhI005_aJkA", isPlaylist: true },
          { title: "OpenAI Agent SDK Series", url: "https://www.youtube.com/watch?v=9Hj55Ycg2fA&list=PLinedj3B30sA-XUqy01s8yrZ0r0QZMpQT", youtubeId: "9Hj55Ycg2fA", isPlaylist: true },
          { title: "AI Agents & Deployment", url: "https://youtu.be/jrjD4w5NNg8", youtubeId: "jrjD4w5NNg8" },
          { title: "Cloud Deployment AWS/Azure", url: "https://www.youtube.com/watch?v=0JKjEVZVz_M&list=PLZ8LpvgeJKcjoDqQD0Nmnb7DshPiZgBj5", youtubeId: "0JKjEVZVz_M", isPlaylist: true },
        ],
        days: [
          { dayNumber: 85, title: "LLM Parameters: Temperature, Top-P, Max Tokens & Model Selection", videos: [{ title: "LLM Foundations", url: "https://www.youtube.com/watch?v=Xpr8D6LeAtw&list=PLPTV0NXA_ZSgsLAr8YCgCwhPIJNNtexWu", youtubeId: "Xpr8D6LeAtw" }] },
          { dayNumber: 86, title: "API Best Practices: Rate Limits, Retries, Exponential Backoff & Error Handling", videos: [{ title: "API Integration & Errors", url: "https://www.youtube.com/watch?v=Xpr8D6LeAtw&list=PLPTV0NXA_ZSgsLAr8YCgCwhPIJNNtexWu", youtubeId: "Xpr8D6LeAtw" }] },
          { dayNumber: 87, title: "FastAPI Fundamentals: Routing, Pydantic Schemas & Async/Await", videos: [{ title: "FastAPI Building Blocks", url: "https://youtu.be/jrjD4w5NNg8", youtubeId: "jrjD4w5NNg8" }] },
          { dayNumber: 88, title: "Environment Variables, .env Files & API Key Security", videos: [{ title: "Security & Config", url: "https://youtu.be/jrjD4w5NNg8", youtubeId: "jrjD4w5NNg8" }] },
          { dayNumber: 89, title: "OpenAI Agent SDK & Tool Calling Functions", videos: [{ title: "OpenAI Agent SDK", url: "https://www.youtube.com/watch?v=9Hj55Ycg2fA&list=PLinedj3B30sA-XUqy01s8yrZ0r0QZMpQT", youtubeId: "9Hj55Ycg2fA" }] },
          { dayNumber: 90, title: "Mini-Project: AI Study Assistant API Backend (FastAPI + Swagger UI)", videos: [{ title: "AI Study Assistant Backend", url: "https://youtu.be/jrjD4w5NNg8", youtubeId: "jrjD4w5NNg8" }] },
          { dayNumber: 91, title: "Connecting Study Assistant API to Streamlit or Web Frontend", videos: [{ title: "Frontend Integration", url: "https://youtu.be/jrjD4w5NNg8", youtubeId: "jrjD4w5NNg8" }] },
        ],
        additionalTopics: [
          "Temperature, maximum output tokens and model selection.",
          "Rate limits, retries, timeouts and API error handling.",
          "Async endpoints and async/await.",
          "Environment variables, .env files and keeping API keys out of Git.",
        ],
      },
      {
        weekNumber: 14,
        title: "Week 14 — Local LLMs, Embeddings & RAG",
        overview:
          "Run local LLMs with Ollama/vLLM, dense embeddings, vector stores (ChromaDB), chunking strategies, top-k retrieval, metadata filtering, and hallucination reduction.",
        mainVideos: [
          { title: "Local LLMs with Ollama & Llama 3", url: "https://www.youtube.com/watch?v=GWB9ApTPTv4", youtubeId: "GWB9ApTPTv4" },
          { title: "Embeddings & RAG Masterclass", url: "https://www.youtube.com/watch?v=HaUe2AN210g", youtubeId: "HaUe2AN210g" },
        ],
        days: [
          { dayNumber: 92, title: "Setting up Local LLMs: Ollama, GGUF Models & LM Studio", videos: [{ title: "Local LLMs Tutorial", url: "https://www.youtube.com/watch?v=GWB9ApTPTv4", youtubeId: "GWB9ApTPTv4" }] },
          { dayNumber: 93, title: "Text Embeddings & Vector Similarity Metrics (Cosine, L2, Dot Product)", videos: [{ title: "Embeddings & RAG", url: "https://www.youtube.com/watch?v=HaUe2AN210g", youtubeId: "HaUe2AN210g" }] },
          { dayNumber: 94, title: "Document Chunking Strategies: Fixed Size, Recursive Character, Semantic Chunking", videos: [{ title: "Chunking Strategies", url: "https://www.youtube.com/watch?v=HaUe2AN210g", youtubeId: "HaUe2AN210g" }] },
          { dayNumber: 95, title: "Vector Databases: ChromaDB Setup, Indexing & Metadata Filtering", videos: [{ title: "ChromaDB RAG Tutorial", url: "https://www.youtube.com/watch?v=HaUe2AN210g", youtubeId: "HaUe2AN210g" }] },
          { dayNumber: 96, title: "Retrieval Pipelines: Top-k Retrieval, Re-ranking (Cross-Encoders)", videos: [{ title: "Retrieval Optimization", url: "https://www.youtube.com/watch?v=HaUe2AN210g", youtubeId: "HaUe2AN210g" }] },
          { dayNumber: 97, title: "Handling RAG Edge Cases: Source Citations & Fallbacks for Missing Context", videos: [{ title: "RAG Edge Cases & Citations", url: "https://www.youtube.com/watch?v=HaUe2AN210g", youtubeId: "HaUe2AN210g" }] },
          { dayNumber: 98, title: "Building a Baseline Personal Document AI Assistant (Project 3)", videos: [{ title: "RAG Project Build", url: "https://www.youtube.com/watch?v=HaUe2AN210g", youtubeId: "HaUe2AN210g" }] },
        ],
        importantConcepts: [
          "Retrieval quality, chunk size, top-k retrieval, metadata filtering, citations, hallucinations.",
          "Learn the basic retrieval pipeline before using complex frameworks so you can debug independently.",
        ],
      },
      {
        weekNumber: 15,
        title: "Week 15 — AI Agents, LangGraph & Evaluation",
        overview:
          "Stateful Agent workflows with LangGraph, conditional routing, human-in-the-loop, tool calling, and RAG/Agent evaluation metrics.",
        mainVideos: [
          { title: "AI Agents Deep Dive", url: "https://www.youtube.com/watch?v=AZDSpS5v57w", youtubeId: "AZDSpS5v57w" },
          { title: "LangGraph Tutorial", url: "https://www.youtube.com/watch?v=jGg_1h0qzaM", youtubeId: "jGg_1h0qzaM" },
          { title: "LLM Evaluation Metrics", url: "https://www.youtube.com/watch?v=6W92_t9FveA&list=PLEneLIDJFpcA", youtubeId: "6W92_t9FveA", isPlaylist: true },
        ],
        days: [
          { dayNumber: 99, title: "Agentic Patterns: ReAct (Reason + Act), Plan-and-Solve, Self-Reflection", videos: [{ title: "AI Agents Concepts", url: "https://www.youtube.com/watch?v=AZDSpS5v57w", youtubeId: "AZDSpS5v57w" }] },
          { dayNumber: 100, title: "LangGraph Foundations: Nodes, Edges, State Graphs & Memory", videos: [{ title: "LangGraph Masterclass", url: "https://www.youtube.com/watch?v=jGg_1h0qzaM", youtubeId: "jGg_1h0qzaM" }] },
          { dayNumber: 101, title: "Tool Calling in LangGraph: Web Search, Python REPL, Document Retrievers", videos: [{ title: "Tool Calling Agents", url: "https://www.youtube.com/watch?v=jGg_1h0qzaM", youtubeId: "jGg_1h0qzaM" }] },
          { dayNumber: 102, title: "State Management, Conditional Edges & Loop Control", videos: [{ title: "LangGraph State Control", url: "https://www.youtube.com/watch?v=jGg_1h0qzaM", youtubeId: "jGg_1h0qzaM" }] },
          { dayNumber: 103, title: "LLM & Agent Evaluation Frameworks (Ragas, TruLens, Groundedness)", videos: [{ title: "Agent Evaluation", url: "https://www.youtube.com/watch?v=6W92_t9FveA&list=PLEneLIDJFpcA", youtubeId: "6W92_t9FveA" }] },
          { dayNumber: 104, title: "Tool-Using AI Research Assistant Project Architecture (Project 4)", videos: [{ title: "Research Assistant Agent", url: "https://www.youtube.com/watch?v=jGg_1h0qzaM", youtubeId: "jGg_1h0qzaM" }] },
          { dayNumber: 105, title: "Testing & Benchmarking Single Prompt vs Multi-Agent Workflows", videos: [{ title: "Agent Benchmark Evaluation", url: "https://www.youtube.com/watch?v=AZDSpS5v57w", youtubeId: "AZDSpS5v57w" }] },
        ],
        importantConcepts: [
          "Distinction between: LLM that generates text vs LLM application with data/tools vs Agent workflow with state & conditional decisions.",
          "Do not assume adding multiple agents automatically improves results; evaluate complexity, cost and latency.",
        ],
      },
      {
        weekNumber: 16,
        title: "Week 16 — Production, Deployment & MLOps Portfolio",
        overview:
          "FastAPI enterprise architecture, Docker containerization, AWS EC2 deployment, Nginx reverse proxy, HTTPS, cost tracking, CI/CD.",
        mainVideos: [
          { title: "FastAPI Project Architecture", url: "https://www.youtube.com/watch?v=tMJA41xhBZM&list=PLUhY5ME1VdIumaSa-m5SQ-ztTL8NWY8Gh", youtubeId: "tMJA41xhBZM", isPlaylist: true },
          { title: "Docker & Containerization Course", url: "https://www.youtube.com/watch?v=rjjES5IsPdg", youtubeId: "rjjES5IsPdg" },
          { title: "Deploy FastAPI on AWS EC2", url: "https://www.youtube.com/watch?v=GkKNxyLp_V0&list=PLdpzxOOAlwvLNOxX0RfndiYSt1Le9azze", youtubeId: "GkKNxyLp_V0", isPlaylist: true },
          { title: "Nginx, Domain & SSL/HTTPS Setup", url: "https://www.youtube.com/watch?v=9jZEfW8h5fQ", youtubeId: "9jZEfW8h5fQ" },
          { title: "Logging, Monitoring & LLM Token Costs", url: "https://www.youtube.com/watch?v=97ftVtITKfo&list=PLrLEqwuz-mRI5ubqVJ7DpbHheCflJDDXk", youtubeId: "97ftVtITKfo", isPlaylist: true },
          { title: "Testing, CI/CD & Portfolio Showcase", url: "https://www.youtube.com/watch?v=z_hWRif-f_Y&list=PL4cGeWgaBTe1uwiqIAc6fwPzPpvgPZI2J", youtubeId: "z_hWRif-f_Y", isPlaylist: true },
        ],
        days: [
          { dayNumber: 106, title: "Production FastAPI Structure: Routers, Controllers, Services & Config", videos: [{ title: "FastAPI Production Architecture", url: "https://www.youtube.com/watch?v=tMJA41xhBZM&list=PLUhY5ME1VdIumaSa-m5SQ-ztTL8NWY8Gh", youtubeId: "tMJA41xhBZM" }] },
          { dayNumber: 107, title: "Dockerizing AI Apps: Dockerfile, Multi-Stage Builds & .dockerignore", videos: [{ title: "Docker Course", url: "https://www.youtube.com/watch?v=rjjES5IsPdg", youtubeId: "rjjES5IsPdg" }] },
          { dayNumber: 108, title: "Docker Compose for Multi-Container Setup (API + Vector DB + Frontend)", videos: [{ title: "Docker Compose", url: "https://www.youtube.com/watch?v=rjjES5IsPdg", youtubeId: "rjjES5IsPdg" }] },
          { dayNumber: 109, title: "Deploying FastAPI & Docker Containers to AWS EC2 Instance", videos: [{ title: "AWS EC2 Deployment", url: "https://www.youtube.com/watch?v=GkKNxyLp_V0&list=PLdpzxOOAlwvLNOxX0RfndiYSt1Le9azze", youtubeId: "GkKNxyLp_V0" }] },
          { dayNumber: 110, title: "Nginx Reverse Proxy, Custom Domain Configuration & Let's Encrypt SSL/HTTPS", videos: [{ title: "Nginx & SSL", url: "https://www.youtube.com/watch?v=9jZEfW8h5fQ", youtubeId: "9jZEfW8h5fQ" }] },
          { dayNumber: 111, title: "LLM Observability: Structured Logging, Tracing & Token Cost Tracking", videos: [{ title: "LLM Monitoring & Cost", url: "https://www.youtube.com/watch?v=97ftVtITKfo&list=PLrLEqwuz-mRI5ubqVJ7DpbHheCflJDDXk", youtubeId: "97ftVtITKfo" }] },
          { dayNumber: 112, title: "Automated Testing (pytest) & GitHub Actions CI/CD Pipeline Setup", videos: [{ title: "Testing & CI/CD", url: "https://www.youtube.com/watch?v=z_hWRif-f_Y&list=PL4cGeWgaBTe1uwiqIAc6fwPzPpvgPZI2J", youtubeId: "z_hWRif-f_Y" }] },
        ],
      },
    ],
  },
];

export const CAPSTONE_DAYS: CapstoneDay[] = [
  {
    dayNumber: 113,
    title: "Review Python, NumPy, Pandas & Data Preprocessing",
    tasks: [
      "Review core Python OOP concepts and functional utilities.",
      "Practice multi-dimensional NumPy array operations & matrix slicing.",
      "Revisit Pandas wrangling, missing data imputation, and Scikit-learn pipelines.",
    ],
    deliverable: "Refactored preprocessing library module in GitHub.",
  },
  {
    dayNumber: 114,
    title: "Revise ML Algorithms & Evaluation Metrics",
    tasks: [
      "Review Regression, Classification, SVMs, Random Forests, and XGBoost.",
      "Check precision/recall tradeoffs, ROC-AUC curves, and cross-validation strategies.",
    ],
    deliverable: "Comprehensive ML metrics summary cheat-sheet.",
  },
  {
    dayNumber: 115,
    title: "Revise PyTorch, CNN & Transformer Fundamentals",
    tasks: [
      "Walk through PyTorch autograd engine and custom nn.Module architecture.",
      "Revisit CNN feature maps, residual connections, and self-attention math.",
    ],
    deliverable: "PyTorch neural network boilerplate repository.",
  },
  {
    dayNumber: 116,
    title: "Improve Churn-Prediction Project & Document Model Comparisons",
    tasks: [
      "Refine Telecom Customer Churn dataset feature engineering.",
      "Compare Logistic Regression vs Random Forest vs XGBoost with ROC curves.",
      "Update README with clear comparison tables.",
    ],
    deliverable: "Polished Telecom Churn Prediction Project.",
  },
  {
    dayNumber: 117,
    title: "Improve Defect-Classification / Image Project",
    tasks: [
      "Apply ResNet fine-tuning on application defect images.",
      "Add confusion matrix visualizations and export ONNX / TorchScript model.",
    ],
    deliverable: "Polished Defect Classification CV Project.",
  },
  {
    dayNumber: 118,
    title: "Complete RAG Assistant with Source References & Evaluation Tests",
    tasks: [
      "Ensure document chunks return precise page/source citations.",
      "Run evaluation tests for answer groundedness and top-k retrieval.",
    ],
    deliverable: "Tested RAG Personal Assistant with Swagger UI & Web UI.",
  },
  {
    dayNumber: 119,
    title: "Finish Deployment, Test Public API, Fix Errors & Update GitHub READMEs",
    tasks: [
      "Verify public EC2 endpoints for FastAPI microservices.",
      "Audit all repository READMEs, badges, environment files, and installation guides.",
    ],
    deliverable: "Live deployed public APIs & complete portfolio repos.",
  },
  {
    dayNumber: 120,
    title: "Record Project Demo, Review Gaps & Plan Next 3 Months",
    tasks: [
      "Record a 3-minute Loom video demo walking through your capstone projects.",
      "Assess remaining knowledge gaps and create a post-bootcamp specialization plan.",
    ],
    deliverable: "Published video demo & 90-day career execution roadmap.",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "churn-prediction",
    title: "Project 1: Telecom Customer Churn Prediction",
    category: "Machine Learning & FinTech",
    recommendedWeeks: "Weeks 5–6",
    badge: "Tabular ML",
    description:
      "Predict customer churn for a telecom enterprise using real-world customer demographics, usage patterns, and billing history. Compare baseline models with trained ensemble classifiers.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn"],
    keyFeatures: [
      "Comprehensive EDA & Class Imbalance Handling (SMOTE / Class Weights)",
      "Comparison of Logistic Regression, Random Forest, and XGBoost",
      "Threshold optimization based on business cost-matrix (False Negatives vs False Positives)",
      "Feature importance interpretation using SHAP values",
    ],
    videoResources: [
      {
        title: "Telecom Customer Churn Prediction Full Project",
        url: "https://www.youtube.com/watch?v=qNglJgNOb7A",
        youtubeId: "qNglJgNOb7A",
      },
    ],
  },
  {
    id: "defect-classification",
    title: "Project 2: Application Defect Classification using PyTorch & CNNs",
    category: "Computer Vision & Deep Learning",
    recommendedWeeks: "Weeks 10–11",
    badge: "Computer Vision",
    description:
      "Build an automated visual quality control system using Convolutional Neural Networks and Transfer Learning to detect and classify industrial or application defects.",
    techStack: ["PyTorch", "Torchvision", "ResNet50", "Albumentations", "OpenCV", "Streamlit"],
    keyFeatures: [
      "Data pipeline with custom Torchvision dataset & data augmentation",
      "Transfer learning with fine-tuning ResNet/EfficientNet backbones",
      "Grad-CAM visual explanation heatmaps highlighting defect regions",
      "Model export to TorchScript / ONNX format for production inference",
    ],
    videoResources: [
      {
        title: "Application Defect Classification PyTorch Playlist",
        url: "https://www.youtube.com/watch?v=dGtDTjYs3xc&list=PLeo1K3hjS3ut49PskOfLnE6WUoOp_2lsD",
        youtubeId: "dGtDTjYs3xc",
        isPlaylist: true,
      },
    ],
  },
  {
    id: "personal-rag-assistant",
    title: "Project 3: Personal Document AI Assistant (LLM Engineering)",
    category: "Generative AI & RAG",
    recommendedWeeks: "Weeks 13–14",
    badge: "GenAI / RAG",
    description:
      "Upload custom PDFs/documents, store vector embeddings in ChromaDB, retrieve contextually relevant passages, and generate cited answers via FastAPI backend.",
    techStack: ["FastAPI", "LangChain / LlamaIndex", "ChromaDB", "OpenAI / Ollama", "Streamlit / Next.js"],
    keyFeatures: [
      "Document ingestion pipeline supporting PDF, Markdown, and TXT files",
      "Semantic chunking & vector search with metadata filtering",
      "Source attribution and page number citations in generated responses",
      "FastAPI asynchronous REST API with Swagger documentation UI",
    ],
    videoResources: [
      {
        title: "Build RAG application FastAPI LangChain ChromaDB tutorial",
        url: "https://www.youtube.com/watch?v=HaUe2AN210g",
        youtubeId: "HaUe2AN210g",
      },
    ],
    searchQuery: "Build RAG application FastAPI LangChain ChromaDB tutorial",
  },
  {
    id: "agentic-research-assistant",
    title: "Project 4: Tool-Using AI Research Assistant (Agentic AI)",
    category: "AI Agents & LangGraph",
    recommendedWeeks: "Weeks 15–16",
    badge: "Agentic AI",
    description:
      "Create an autonomous multi-step agent workflow with LangGraph that calls approved web search tools, executes Python code, queries document collections, and produces structured markdown reports.",
    techStack: ["LangGraph", "LangChain", "FastAPI", "Tavily Search API", "Python REPL", "Docker"],
    keyFeatures: [
      "Stateful agent execution graph with conditional branching & loop safety",
      "Tool invocation: Web Search, Document Retrieval, Calculator & Python Runner",
      "Structured output generation & source citation validation",
      "Execution logs, token usage tracking, and evaluation benchmarks",
    ],
    videoResources: [
      {
        title: "LangGraph Tool Calling Agent FastAPI Project Tutorial",
        url: "https://www.youtube.com/watch?v=jGg_1h0qzaM",
        youtubeId: "jGg_1h0qzaM",
      },
    ],
    searchQuery: "LangGraph tool calling agent FastAPI project tutorial",
  },
];

export const RESEARCH_TRACK: ResearchStage[] = [
  {
    stage: "Stage 1 — Reading Papers",
    month: "Month 1",
    topics: "How to read an ML paper: dissecting Abstracts, Methodology, Architecture diagrams, and Evaluation tables.",
  },
  {
    stage: "Stage 2 — Literature Discovery",
    month: "Month 2",
    topics: "Google Scholar, Semantic Scholar, building Literature Comparison Matrices, and defining Baseline Benchmark Models.",
  },
  {
    stage: "Stage 3 — Experimental Design",
    month: "Month 3",
    topics: "Formulating Research Questions, designing Reproducible Experiments, conducting Ablation Studies, and Error Analysis.",
  },
  {
    stage: "Stage 4 — Scientific Writing & Reporting",
    month: "Month 4",
    topics: "LaTeX / Overleaf paper structure, figures, tables, math notation, research ethics, limitations, and reproducible code repos.",
  },
];

export const RESEARCH_YOUTUBE_SEARCHES = [
  "How to read machine learning research papers for beginners",
  "Systematic literature review AI research tutorial",
  "Research gap identification machine learning",
  "LaTeX Overleaf research paper writing tutorial",
  "Ablation study and reproducible machine learning experiments",
];
