export type ProjectLink = { label: string; url: string };
export type ProjectStat = { value: string; label: string };

export type Project = {
  id: string;
  kind: "Thesis" | "Conference paper" | "Preprint";
  year: string;
  venue: string;
  title: string;
  shortTitle: string;
  authors: string[];
  summary: string;
  contribution: string;
  questionLabel?: string;
  question: string;
  approach: string[];
  evaluation: string;
  stats: ProjectStat[];
  narrative: string[];
  limitations: string[];
  tags: string[];
  paper: string;
  links: ProjectLink[];
  diagram: "thesis" | "agents" | "probe" | "prompts" | "retrieval" | "safety" | "evidence" | "benchmark" | "ontology";
  tone: "forest" | "sage" | "sand" | "ink";
};

export const projects: Project[] = [
  {
    id: "phd-thesis",
    kind: "Thesis",
    year: "2026",
    venue: "PhD thesis · University of Manchester",
    title: "Evaluating and Controlling Natural Language Inference over Clinical Trial Texts",
    shortTitle: "PhD thesis",
    authors: ["Maël Jullien"],
    summary: "This thesis formalises Clinical Trial Natural Language Inference as deciding whether clinically meaningful claims are supported, contradicted, or indeterminate across heterogeneous trial materials. It develops a reasoning-first programme connecting task specification, robustness-centred evaluation, and controlled system design. The contributions span the NLI4CT benchmark and shared tasks, Faithfulness and Consistency metrics, ontology-grounded retrieval, prompt and LoRA studies, GKMRV diagnostic probes, and the CARENLI agentic framework. Collectively, the studies show how aggregate scores can conceal shortcutting and brittleness, while structured inference procedures make errors easier to locate and can improve reasoning fidelity.",
    contribution: "Connects seven research contributions into a unified account of how clinical NLI systems can be specified, evaluated beyond aggregate F1, and constrained by explicit inference procedures.",
    questionLabel: "Research programme",
    question: "How can natural language inference over full clinical-trial artefacts be formally specified, diagnosed for systematic reasoning failures, and controlled using structured inference methods?",
    approach: [
      "Formalise clinical-trial NLI as classification and evidence selection over heterogeneous report sections.",
      "Measure faithfulness, consistency, and the dissociation between factual access and inferential competence.",
      "Control inference through ontology-grounded retrieval, structured prompts, lightweight adaptation, and reasoning-family-specific agents.",
    ],
    evaluation: "The thesis synthesises benchmark construction and shared-task analyses with experiments on NLI4CT, NLI4CT-P, TREC 2022 Clinical Trials, MedNLI, and controlled diagnostic CTNLI sets. Its constituent studies evaluate both discriminative and generative models, prompting regimes, LoRA adaptation, and agentic architectures.",
    stats: [
      { value: "7", label: "linked research contributions" },
      { value: "2,400", label: "expert-annotated NLI4CT instances" },
      { value: "20 Feb 2026", label: "degree award date" },
    ],
    narrative: [
      "Clinical Trial Natural Language Inference asks whether a clinically meaningful claim is supported, contradicted, or left indeterminate by heterogeneous trial artefacts. The thesis treats this as both a formal reasoning problem and an evaluation problem: a model may predict the right label for the wrong reason, fail after a small semantic intervention, or possess the relevant clinical facts without composing them into a valid inference.",
      "The work develops a progression of resources and control mechanisms. NLI4CT formalises full-report classification and evidence selection; two SemEval shared tasks examine system performance and robustness; and later chapters study ontology-grounded retrieval, prompt structure, LoRA adaptation, ground-knowledge verification, and explicit reasoning families.",
      "The final contribution, CARENLI, routes each case to causal, compositional, epistemic, or risk-based procedures before specialised solving and verification. Across the thesis, the central finding is that scale alone does not resolve CTNLI: benchmark structure, controlled interventions, and explicit decision procedures are needed to expose and reduce systematic failures.",
    ],
    limitations: [
      "The evaluations are benchmark based and do not constitute prospective clinical validation or a patient-facing system.",
      "The exact numbered thesis research questions are not reproduced here because they are outside the accessible ProQuest preview; the research question above is a synthesis of the official abstract and chapter structure.",
      "Individual studies inherit domain-specific datasets, bounded model sets, generated interventions, and template-controlled diagnostic examples.",
    ],
    tags: ["PhD thesis", "Clinical NLI", "Reasoning evaluation"],
    paper: "https://search.proquest.com/openview/4651fdf8567f68ea4aabfb7945962583/1?pq-origsite=gscholar&cbl=2026366&diss=y",
    links: [
      { label: "ProQuest thesis", url: "https://search.proquest.com/openview/4651fdf8567f68ea4aabfb7945962583/1?pq-origsite=gscholar&cbl=2026366&diss=y" },
      { label: "Manchester record", url: "https://research.manchester.ac.uk/en/studentTheses/evaluating-and-controlling-natural-language-inference-over-clinic/" },
    ],
    diagram: "thesis",
    tone: "forest",
  },
  {
    id: "carenli",
    kind: "Conference paper",
    year: "2026",
    venue: "Findings of ACL",
    title: "Compartmentalised Agentic Reasoning for Clinical NLI",
    shortTitle: "CARENLI",
    authors: ["Maël Jullien", "André Freitas", "Marco Valentino", "Lei Xu"],
    summary: "Clinical NLI often depends on selecting the appropriate inferential procedure rather than matching surface language. CARENLI routes each premise–statement pair to one of four reasoning families—causal attribution, compositional grounding, epistemic verification, or risk-state abstraction—before applying a specialised solver, verification stage, and targeted refinement. The framework is evaluated on an expanded 200-item CTNLI benchmark with four contemporary language-model backbones. Mean accuracy rises from approximately 23% under direct prompting to approximately 57%, with the largest gains occurring on structurally demanding reasoning types.",
    contribution: "Turns the diagnosis of schema collapse into an auditable intervention and shows that correct routing is the main condition for effective specialised solving.",
    question: "Can explicit routing and specialised decision procedures reduce failures caused by applying one generic reasoning process to clinically different inference problems?",
    approach: [
      "Route each case to causal attribution, compositional grounding, epistemic verification, or risk-state abstraction.",
      "Apply a family-specific solver with explicit decision rules and a traceable inference output.",
      "Check factual grounding and procedural validity with a verifier, then apply minimal corrections through a refiner.",
    ],
    evaluation: "An expanded 200-item CTNLI diagnostic benchmark contains 50 expert-validated instances per reasoning family. GPT-5.1, GPT-4.1, GPT-4o-mini, and DeepSeek-R1 were compared under CARENLI, oracle routing, generic chain-of-thought, and direct prompting.",
    stats: [
      { value: "56.8%", label: "CARENLI macro accuracy" },
      { value: "23.1%", label: "direct-prompt baseline" },
      { value: "73.3%", label: "router accuracy" },
    ],
    narrative: [
      "Clinical NLI problems do not all require the same inferential procedure. A causal claim demands evidence about interventions and comparators; a treatment configuration requires joint checks across drug, dose, schedule, and patient factors; conflicting statements require an evidence hierarchy; and risk judgments must combine likelihood with severity.",
      "CARENLI first routes an item to a reasoning family, then invokes a specialised solver whose output is checked for factual grounding and procedural validity. The structure raises macro accuracy to 56.8%, compared with 22.5% for generic chain-of-thought and 23.1% for direct prompting. Solver accuracy averages 70.8% on correctly routed items but 21.1% after misrouting.",
      "The system improves execution of reasoning schemas that models can already partially express; it does not eliminate difficult compositional failures. Refinement adds only 0.7 points overall, making routing and schema-conditioned solving—not post-hoc correction—the main source of gain.",
    ],
    limitations: [
      "The 200 examples are generated from typed templates and contain less linguistic and clinical variation than real protocols or patient records.",
      "The label distribution is diagnostic rather than balanced, and the three-way NLI framing omits calibration and abstention.",
      "Results cover four text-only LLMs and do not establish clinical-deployment readiness.",
    ],
    tags: ["Agentic AI", "Clinical NLI", "Verification"],
    paper: "https://aclanthology.org/2026.findings-acl.545/",
    links: [
      { label: "ACL Anthology", url: "https://aclanthology.org/2026.findings-acl.545/" },
      { label: "PDF", url: "https://aclanthology.org/2026.findings-acl.545.pdf" },
      { label: "Code", url: "https://github.com/Mael7307/CARENLI" },
    ],
    diagram: "agents",
    tone: "ink",
  },
  {
    id: "clinical-prompts",
    kind: "Conference paper",
    year: "2026",
    venue: "Findings of ACL",
    title: "Dissecting Clinical Reasoning in Natural Language Inference for Large Language Models",
    shortTitle: "Prompt × adaptation",
    authors: ["Maël Jullien", "André Freitas", "Marco Valentino", "Leonardo Ranaldi"],
    summary: "This controlled study examines how prompt structure and parameter-efficient adaptation jointly affect clinical natural language inference. Four prompting families elicit reasoning at different levels of abstraction, while demonstrations produced by a frontier model are used to adapt models of at most four billion parameters through LoRA. Evaluation across clinically motivated reasoning types on NLI4CT finds that prompt choice accounts for up to 44% of macro-F1 variance. LoRA adds 8–12 F1 points, raises valid output alignment above 97%, and reduces the gap between compact models and GPT-4o-mini.",
    contribution: "Separates prompt, model, and adaptation effects while analysing performance by six clinically motivated reasoning types and two transfer datasets.",
    question: "How do prompt structure and parameter-efficient adaptation affect clinical NLI overall, across reasoning types, and under transfer to other clinical datasets?",
    approach: [
      "Compare natural-language reasoning, iterative self-revision, thought-action reasoning, and quasi-symbolic prompting.",
      "Train separate LoRA adapters for each prompt family on GPT-4o-mini-generated demonstrations.",
      "Annotate NLI4CT by six reasoning types and evaluate transfer to MedNLI and TREC clinical-trial data.",
    ],
    evaluation: "Four compact models below 4B parameters were trained on 500 demonstrations per prompt type, with GPT-4o-mini as a frontier comparison. Transfer used balanced 400-instance subsets of MedNLI and TREC 2022 Clinical Trials.",
    stats: [
      { value: "44%", label: "variance explained by prompts" },
      { value: "+8–12", label: "LoRA macro-F1 points" },
      { value: "24/32", label: "transfer settings improved" },
    ],
    narrative: [
      "This work separates three factors that are often confounded in clinical-NLI experiments: the underlying model, the structure of the prompt, and parameter-efficient adaptation. Four prompt families cover free-form reasoning, self-revision, action-based verification, and quasi-symbolic formalisation.",
      "After controlling for model identity and LoRA, prompt structure explains 44% of macro-F1 variance. No strategy dominates every reasoning category. LoRA adds 8–12 F1 points for structured prompts and brings Phi-4-LoRA with natural-language reasoning to 0.729 F1, compared with 0.800 for GPT-4o-mini.",
      "NLI4CT-only adaptation improves 24 of 32 settings on MedNLI and TREC while increasing output validity. The result supports compact adapted models as experimental clinical-NLP components, but not as clinical systems: demonstrations are synthetic and the evaluation does not use real patient deployments.",
    ],
    limitations: [
      "Demonstrations inherit potential factual and stylistic biases from GPT-4o-mini.",
      "All trainable checkpoints are below 4B parameters, so conclusions may not transfer directly to larger models.",
      "The taxonomy uses one representative prompt per category and is not exhaustive.",
    ],
    tags: ["Prompting", "LoRA", "Clinical NLP"],
    paper: "https://aclanthology.org/2026.findings-acl.1307/",
    links: [
      { label: "ACL Anthology", url: "https://aclanthology.org/2026.findings-acl.1307/" },
      { label: "PDF", url: "https://aclanthology.org/2026.findings-acl.1307.pdf" },
      { label: "Code", url: "https://github.com/Mael7307/Prompt-LoRA-Evaluation-for-Clinical-NLI" },
    ],
    diagram: "prompts",
    tone: "sage",
  },
  {
    id: "knowledge-reasoning",
    kind: "Preprint",
    year: "2025",
    venue: "arXiv preprint",
    title: "The Knowledge–Reasoning Dissociation: Fundamental Limitations of LLMs in Clinical Natural Language Inference",
    shortTitle: "Knowledge ≠ reasoning",
    authors: ["Maël Jullien", "Marco Valentino", "André Freitas"],
    summary: "The study tests whether language-model failures in clinical inference arise from missing factual knowledge or from an inability to apply available knowledge correctly. A diagnostic CTNLI benchmark covers four reasoning families, with every inference item paired with Ground Knowledge and Meta-Level Reasoning Verification probes. Six language models are evaluated under direct and chain-of-thought prompting. Although mean probe accuracy reaches 0.918, mean reasoning accuracy is only 0.25, while predictions remain highly consistent across samples. The resulting dissociation exposes stable heuristics and makes knowledge–reasoning failures directly measurable.",
    contribution: "Makes the knowledge–reasoning gap measurable and shows that many clinical-NLI errors reflect stable task-specific heuristics rather than missing facts or random sampling.",
    question: "When an LLM fails a clinical inference, does it lack the required medical fact, or does it fail to apply knowledge it already possesses?",
    approach: [
      "Define causal, compositional, epistemic, and risk-based clinical reasoning families.",
      "Pair each inference item with probes that test the underlying fact and whether it is being applied correctly.",
      "Compare six LLMs under direct and chain-of-thought prompting with repeated samples.",
    ],
    evaluation: "The study contains 40 main-task items, ten per reasoning family, each paired with two verification probes. Six proprietary and open models were evaluated with ten completions per item and prompting condition.",
    stats: [
      { value: "0.918", label: "mean knowledge-probe accuracy" },
      { value: "0.25", label: "mean reasoning accuracy" },
      { value: "0.87", label: "mean response consistency" },
    ],
    narrative: [
      "Aggregate benchmark accuracy cannot show whether a clinical-NLI error follows from missing knowledge or invalid use of known facts. This study isolates four reasoning families and pairs every inference item with probes for factual access and meta-level application.",
      "Across six models, mean GKMRV accuracy reaches 0.918 while mean accuracy on the associated reasoning tasks is 0.25. Compositional grounding is especially difficult at 0.04 mean accuracy. Predictions remain highly repeatable, with 0.87 mean consistency, which points to stable heuristics rather than random failure.",
      "The result is diagnostic rather than universal. The benchmark is deliberately small and template controlled, but within that scope it provides direct evidence that factual recall is not an adequate proxy for correct inferential use.",
    ],
    limitations: [
      "Each reasoning family contains only ten template-generated items, limiting breadth and statistical power.",
      "Three labels flatten graded clinical judgments, uncertainty, and possible abstention.",
      "Proprietary-model updates and opaque training data can change reproducibility over time.",
    ],
    tags: ["Reliability", "Evaluation", "Reasoning"],
    paper: "https://arxiv.org/abs/2508.10777",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2508.10777" },
      { label: "PDF", url: "https://arxiv.org/pdf/2508.10777" },
      { label: "Code", url: "https://github.com/Mael7307/knowledge-reasoning-ctnli" },
    ],
    diagram: "probe",
    tone: "sand",
  },
  {
    id: "trial-retrieval",
    kind: "Preprint",
    year: "2024",
    venue: "arXiv preprint",
    title: "Controlled LLM-based Reasoning for Clinical Trial Retrieval",
    shortTitle: "Trial retrieval",
    authors: ["Maël Jullien", "Alex Bogatu", "Harriet Unsworth", "André Freitas"],
    summary: "Matching patients to clinical trials requires expert interpretation of medical records and eligibility criteria across a very large trial collection. This work proposes a scalable, set-guided reasoning method that represents patient and trial information as typed attributes, normalises clinical concepts through SNOMED CT, and combines language-model eligibility judgments with explicit filtering and ranking rules. Evaluation on the TREC 2022 Clinical Trials benchmark shows performance above the reported state of the art, reaching 0.693 NDCG@10 and 0.730 Precision@10 while retaining inspectable intermediate representations and decision procedures.",
    contribution: "Combines LLM extraction and eligibility judgments with ontology-grounded sets and inspectable ranking functions rather than opaque end-to-end ranking.",
    question: "Can patient–trial retrieval be made scalable and more interpretable by constraining LLM reasoning with typed sets, ontologies, eligibility labels, and explicit ranking rules?",
    approach: [
      "Convert patient notes and trial records into typed attributes for diagnoses, treatments, demographics, age, and gender.",
      "Normalise and expand diagnoses through SNOMED CT before condition-based retrieval and demographic filtering.",
      "Apply fine- and coarse-grained LLM eligibility judgments through explicit deontic re-ranking rules.",
    ],
    evaluation: "TREC 2022 provides 50 synthetic patient topics and 375,581 ClinicalTrials.gov records. LLM re-ranking was restricted to the top 25 retrieved trials because of resource limits.",
    stats: [
      { value: "0.693", label: "NDCG@10" },
      { value: "0.730", label: "precision@10" },
      { value: "0.860", label: "mean reciprocal rank" },
    ],
    narrative: [
      "Matching a patient to a clinical trial is not ordinary semantic search. A system must reconcile clinical terminology, distinguish inclusion from exclusion criteria, reason about missing information, and retrieve candidates from hundreds of thousands of records.",
      "The pipeline represents patient notes and trial records as typed attribute sets. SNOMED CT normalisation supports first-stage condition retrieval; demographic filters narrow candidates; and fine- and coarse-grained LLM eligibility judgments feed explicit ranking functions.",
      "On TREC 2022, coarse-grained eligibility reaches 0.693 NDCG@10, while hybrid eligibility reaches 0.730 P@10 and 0.860 MRR. The evaluation also exposes difficulties with exclusions, age extraction, proprietary-model opacity, and non-determinism.",
    ],
    limitations: [
      "Re-ranking only the top 25 trials limits conclusions about full-corpus LLM reasoning.",
      "GPT models are proprietary and non-deterministic, and possible exposure to TREC data could not be verified.",
      "The method requires clinical validation, risk analysis, and regulatory review before any patient-facing use.",
    ],
    tags: ["Retrieval", "SNOMED CT", "Clinical trials"],
    paper: "https://arxiv.org/abs/2409.18998",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2409.18998" },
      { label: "PDF", url: "https://arxiv.org/pdf/2409.18998" },
      { label: "Code", url: "https://github.com/Mael7307/Controlled-LLM-based-Reasoning-for-Clinical-Trial-Retrieval" },
    ],
    diagram: "retrieval",
    tone: "forest",
  },
  {
    id: "semeval-2024",
    kind: "Conference paper",
    year: "2024",
    venue: "SemEval · NAACL",
    title: "SemEval-2024 Task 2: Safe Biomedical Natural Language Inference for Clinical Trials",
    shortTitle: "Safe clinical NLI",
    authors: ["Maël Jullien", "Marco Valentino", "André Freitas"],
    summary: "SemEval-2024 Task 2 examines shortcut learning, factual inconsistency, and adversarial fragility in biomedical natural language inference. The NLI4CT-P resource extends the original benchmark with controlled interventions and meaning-preserving perturbations, enabling separate measurements of whether systems react to causally relevant changes and remain stable under equivalent formulations. The shared task attracted 106 registered participants, more than 1,200 submissions, and 25 system-description papers. Its results provide a broad comparison of methods for safer clinical NLI; the official erratum supplies the corrected Consistency computation.",
    contribution: "Separates predictive performance from faithfulness under clinically relevant changes and consistency under semantically equivalent rewrites.",
    question: "Do clinical-NLI systems preserve decisions under equivalent rewrites and change them appropriately after causally relevant semantic interventions?",
    approach: [
      "Create paired contrast examples through paraphrase, contradiction, numerical edits, and neutral biomedical definitions.",
      "Measure Faithfulness for meaning-altering interventions and Consistency for meaning-preserving changes.",
      "Analyse 25 system papers spanning generative and discriminative models, external data, prompting, and fine-tuning.",
    ],
    evaluation: "NLI4CT-P extends the original 2,400 examples with 1,942 perturbed development and 5,000 perturbed test statements. The task registered 106 participants and received more than 1,200 submissions.",
    stats: [
      { value: "0.80", label: "highest macro F1" },
      { value: "0.95", label: "highest Faithfulness" },
      { value: ">1,200", label: "system submissions" },
    ],
    narrative: [
      "A high F1 score does not show that a model uses the right clinical evidence. It may preserve a prediction after a medically relevant change or reverse it after a harmless paraphrase. NLI4CT-P measures these behaviours directly.",
      "The resource extends NLI4CT with contrast examples produced through paraphrasing, contradiction rephrasing, numerical changes, and appended neutral definitions. F1 is evaluated alongside Faithfulness and Consistency, giving separate views of responsiveness and invariance.",
      "The best F1 was 0.80 and the best Faithfulness score was 0.95. An official erratum later corrected the Consistency computation because the original implementation measured accuracy against gold labels rather than agreement between equivalent inputs; the corrected result is part of the record.",
    ],
    limitations: [
      "The official erratum supersedes the original paper's Consistency values and related comparisons.",
      "Numerical interventions are less numerous because many statements lack quantities and low-quality generations were removed.",
      "Cross-system prompt comparisons are confounded by different base models, data, and fine-tuning strategies.",
    ],
    tags: ["Shared task", "Robustness", "Contrast sets"],
    paper: "https://aclanthology.org/2024.semeval-1.271/",
    links: [
      { label: "ACL Anthology", url: "https://aclanthology.org/2024.semeval-1.271/" },
      { label: "PDF", url: "https://aclanthology.org/2024.semeval-1.271.pdf" },
      { label: "Official erratum", url: "https://aclanthology.org/2024.semeval-1.271e1.pdf" },
      { label: "Code and data", url: "https://github.com/ai-systems/Task-2-SemEval-2024" },
    ],
    diagram: "safety",
    tone: "ink",
  },
  {
    id: "nli4ct",
    kind: "Conference paper",
    year: "2023",
    venue: "EMNLP",
    title: "NLI4CT: Multi-Evidence Natural Language Inference for Clinical Trial Reports",
    shortTitle: "NLI4CT",
    authors: ["Maël Jullien", "Marco Valentino", "Hannah Frost", "Paul O’Regan", "Dónal Landers", "André Freitas"],
    summary: "Clinical trial reports contain essential evidence for clinical decisions, but their scale and complexity make manual inspection impractical. NLI4CT introduces 2,400 expert-annotated examples over full breast-cancer trial sections, linking an entailment or contradiction decision to the facts required to justify it. The benchmark defines two connected tasks: determining the inference relation between a statement and one or more reports, and retrieving the supporting evidence. The examples require multi-evidence biomedical and numerical reasoning, and the original six inference baselines reach a maximum reported abstract-level F1 of 0.627.",
    contribution: "Establishes a benchmark over full clinical-trial sections that jointly evaluates multi-evidence biomedical and numerical inference with explicit evidence extraction.",
    question: "How can biomedical NLI be evaluated when claims require several facts, domain knowledge, numerical operations, and an explicit supporting-evidence set?",
    approach: [
      "Derive statements from eligibility, intervention, result, and adverse-event sections of clinical-trial reports.",
      "Pair entailment or contradiction labels with the facts needed to justify each decision.",
      "Evaluate both single-trial claims and comparisons across two trial reports.",
    ],
    evaluation: "The dataset contains 2,400 examples from 1,000 breast-cancer trials: 1,700 train, 500 test, and 200 development. Four domain experts contributed approximately 260 hours of annotation.",
    stats: [
      { value: "2,400", label: "annotated examples" },
      { value: "0.644", label: "best baseline Macro F1" },
      { value: "0.786", label: "best evidence mAP" },
    ],
    narrative: [
      "NLI4CT studies inference over clinical-trial reports beyond short biomedical sentence pairs. Examples can require aggregating several facts, comparing trials, converting units, resolving terminology, or reasoning across eligibility, intervention, outcome, and adverse-event sections.",
      "Every example contains a statement, one or two report sections, an entailment or contradiction label, and the facts needed to justify that label. This supports linked evaluations of the inference relation and the associated evidence set.",
      "The strongest expanded-table inference baseline reaches 0.644 Macro F1, and supplying gold evidence raises the best result only to 0.667. Numerical examples are especially difficult, while BM25 remains the strongest tested evidence ranker at 0.786 mAP.",
    ],
    limitations: [
      "Expert annotation limits the training set to 1,700 examples, which is small for large neural models.",
      "Comparison inputs can exceed 512-token baseline limits and require truncation.",
      "The original benchmark did not test causal response to interventions; NLI4CT-P was created to address that gap.",
    ],
    tags: ["Dataset", "Evidence", "Clinical NLI"],
    paper: "https://aclanthology.org/2023.emnlp-main.1041/",
    links: [
      { label: "ACL Anthology", url: "https://aclanthology.org/2023.emnlp-main.1041/" },
      { label: "PDF", url: "https://aclanthology.org/2023.emnlp-main.1041.pdf" },
      { label: "Code and dataset", url: "https://github.com/ai-systems/nli4ct" },
    ],
    diagram: "evidence",
    tone: "sage",
  },
  {
    id: "semeval-2023",
    kind: "Conference paper",
    year: "2023",
    venue: "SemEval · ACL",
    title: "SemEval-2023 Task 7: Multi-Evidence Natural Language Inference for Clinical Trial Data",
    shortTitle: "Evidence benchmark",
    authors: ["Maël Jullien", "Marco Valentino", "Hannah Frost", "Paul O’Regan", "Dónal Landers", "André Freitas"],
    summary: "SemEval-2023 Task 7 turns NLI4CT into a shared evaluation of clinical-trial entailment and evidence selection. Both tasks require multi-hop biomedical and numerical reasoning over report sections. The entailment task received 643 submissions from 40 participants, while evidence selection received 364 submissions from 23 participants. Most entailment systems did not significantly outperform the majority-class baseline, and evidence selection was consistently easier. Cross-system analysis also found a stronger association between model scale and performance than between biomedical pre-training and performance.",
    contribution: "Provides a field-wide comparison of system architectures and identifies model scale, numerical reasoning, evidence ordering, and paired-example exploitation as major factors.",
    question: "Which architectures and training strategies solve NLI4CT, and what do shared-task submissions reveal about scale, biomedical pre-training, evidence ordering, and numerical reasoning?",
    approach: [
      "Evaluate binary entailment or contradiction prediction over clinical-trial report sections.",
      "Evaluate whether each premise fact is evidence for the target statement or irrelevant.",
      "Analyse 21 system papers covering generative, discriminative, biomedical, ontology-based, and rule-based methods.",
    ],
    evaluation: "The 21-day evaluation received 643 entailment submissions from 40 participants and 364 evidence-selection submissions from 23 participants, all using the 2,400-example NLI4CT dataset.",
    stats: [
      { value: "1,007", label: "total submissions" },
      { value: "0.856", label: "best entailment F1" },
      { value: "0.853", label: "best evidence F1" },
    ],
    narrative: [
      "SemEval-2023 Task 7 turned NLI4CT into a shared evaluation of clinical entailment and evidence selection. Systems must reason over sections containing biomedical terminology, multiple relevant facts, and numerical comparisons while also identifying supporting or contradicting evidence.",
      "The strongest system reached 0.856 F1 for entailment and 0.853 for evidence selection, but most entailment entries did not significantly outperform the 0.667 majority baseline. Evidence selection was easier on average by 0.07 F1.",
      "The cross-system analysis found a clearer relationship between model size and performance than between biomedical pre-training and performance. Retrieving evidence first did not improve entailment overall, although it yielded more precise evidence sets than selecting evidence after a label had already been predicted.",
    ],
    limitations: [
      "Negative rewriting creates paired entailed and contradicted statements that some systems can exploit.",
      "Participant comparisons are observational because model scale, prompts, data, and architectures vary simultaneously.",
      "The training set is relatively small and numerical reasoning remains unresolved.",
    ],
    tags: ["Shared task", "Multi-evidence", "Evaluation"],
    paper: "https://aclanthology.org/2023.semeval-1.307/",
    links: [
      { label: "ACL Anthology", url: "https://aclanthology.org/2023.semeval-1.307/" },
      { label: "PDF", url: "https://aclanthology.org/2023.semeval-1.307.pdf" },
      { label: "Code and dataset", url: "https://github.com/ai-systems/nli4ct" },
    ],
    diagram: "benchmark",
    tone: "sand",
  },
  {
    id: "ontology",
    kind: "Preprint",
    year: "2022",
    venue: "arXiv preprint",
    title: "Do Transformers Encode a Foundational Ontology? Probing Abstract Classes in Natural Language",
    shortTitle: "Ontology probing",
    authors: ["Maël Jullien", "Marco Valentino", "André Freitas"],
    summary: "This work extends semantic probing to highly abstract categories by asking whether Transformer representations reflect a foundational ontology. It introduces a systematic methodology covering different pre-training and fine-tuning regimes and evaluates several language models across three complementary ontology-tagging experiments. The results indicate that Transformer models incidentally encode information associated with foundational categories during pre-training. That information can also support practical tagging: directly fine-tuned ontology classifiers reach 90% accuracy. The probing evidence establishes recoverability of the categories, rather than proving that models causally use them in downstream reasoning.",
    contribution: "Provides a controlled probing methodology and a term-level classification resource for testing whether highly abstract ontology categories are recoverable from Transformer representations.",
    question: "Can contemporary Transformer models reflect an underlying foundational ontology even though those categories are not an explicit pre-training objective?",
    approach: [
      "Align Brown Corpus contexts with six WordNet–DOLCE classes and manually verify a balanced 2,760-example dataset.",
      "Train linear and MLP probes for multiclass, binary verification, and contextual target-word tasks with control-task selectivity.",
      "Directly fine-tune BERT and RoBERTa variants as term-level ontology taggers.",
    ],
    evaluation: "BERT- and RoBERTa-based models, including NLI-fine-tuned variants, are evaluated through Probe-Ably control tasks and direct fine-tuning. The dataset contains 460 examples for each of six ontology classes.",
    stats: [
      { value: "2,760", label: "verified examples" },
      { value: "0.66", label: "best contextual probe" },
      { value: "0.90", label: "fine-tuned tagger accuracy" },
    ],
    narrative: [
      "Foundational ontologies assign domain-independent categories—such as biological object, information object, or cognitive event—to words in context. This study asks whether those abstractions are recoverable from Transformer representations and whether they can support a practical ontology tagger.",
      "The study constructs 2,760 balanced examples by aligning Brown Corpus contexts with six WordNet–DOLCE classes. Linear and MLP probes test recoverability in multiclass, binary, and contextual target-word settings, while separate models are directly fine-tuned as ontology taggers.",
      "Most probes exceed random controls. The best basic probe reaches 0.57 accuracy at 0.30 selectivity against 0.17 chance, the best contextual probe reaches 0.66, and directly fine-tuned taggers reach 0.90. These results support recoverability, not the causal claim that models use ontology categories in downstream behaviour.",
    ],
    limitations: [
      "Probing is correlational and cannot establish causal use of ontology information in model behaviour.",
      "The resource is English-only, contains six mapped classes, and has small per-class test sets.",
      "Class-wise accuracy varies, and the published preprint does not provide a verifiable public code or data URL.",
    ],
    tags: ["Interpretability", "DOLCE", "Transformers"],
    paper: "https://arxiv.org/abs/2201.10262",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2201.10262" },
      { label: "PDF", url: "https://arxiv.org/pdf/2201.10262" },
    ],
    diagram: "ontology",
    tone: "ink",
  },
];
