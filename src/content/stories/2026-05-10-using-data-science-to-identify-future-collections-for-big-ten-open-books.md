---
templateKey: story
title: Using Data Science to Identify Future Collections for Big Ten Open Books
summary: Thanks to U-M Rackham Graduate School doctoral intern Yuru Chen, we
  have applied a data science and machine learning workflow to sort over 500,000
  book records exported from Big Ten libraries to identify in-demand subject
  areas for future Big Ten Open Books collections. These topic areas are timely
  and have a "critical mass" of at least 500 candidate titles each. Contributing
  Big Ten presses will identify 100 titles in each subject collection that can
  find a new audience through open access.
storyImage: assets/image_432a2bad.png
date: 2026-05-10T22:22:52.828Z
---
The data refinement strategy executed by Yuru Chen utilized data science and machine learning to transform messy bibliographic records into a strategic roadmap for future collections. It consisted of five main steps.

* **Multidimensional Deduplication:** Before new subjects could be identified, the data required rigorous cleaning. The workflow analyzed 144 different types of identifiers, including title, author, ISBN, OCLC, and LCCN, using fuzzy matching logic to identify unique works. By applying thresholds for title similarity (>0.95) and author similarity (>0.86), the project condensed the massive dataset into a clean list of approximately 36,000 unique records.
* **Filling the Metadata Gaps with LLMs:** Approximately 6.3% of the records (over 2,300 titles) were missing both LC and Dewey call numbers. The project integrated a Large Language Model to analyze these titles and descriptions, assigning them to appropriate standardized subject classifications and call number categories. This ensured that recent or under-cataloged works were not excluded from discovery.
* **The AI "Scoring Engine":** A custom-built rule-based scoring engine was developed to classify titles into potential collections automatically. This tool combined three dimensions of analysis: a normalized keyword scan of titles and descriptions against subject-specific keyword lists, prefix matching against Library of Congress (LC) classifications, and prefix matching against Dewey Decimal classifications. It also incorporated embedding-based similarity scores. Titles received cumulative points for every match across these dimensions, allowing the project to rank their relevance to specific themes.
* **Semantic Discovery via Embedding Systems:** To move beyond simple keyword matching, the project implemented an embedding system. This AI technique maps the semantic meaning of words, allowing the system to recognize that a book about "carbon footprint", "renewable energy", or “sustainability” belongs in the "Environment" collection even when those exact theme keywords aren't in the metadata.
* **Author_Iden.** To further enrich these collections with scholarly context, a specialized software tool was developed to harvest missing author metadata and institutional affiliations from multiple sources including library authority records, ORCID, and institutional repositories. This tool identifies author names, resolves institutional affiliations across multiple variants and historical changes, and creates linked authority records (ISNI/VIAF) where available. This ensures that the scholars behind these works are properly recognized.

This automated workflow fundamentally changed the scale of BTOB’s collection building. The discovery process shifted from identifying individual books to mapping 74 new thematic areas, each containing nearly 500 candidate titles. The top 14 of these will now be presented to the participating Big Ten university presses for their final title selection.

The data-driven analysis also refined and expanded the three upcoming collections:

* Health Disparities and Disability Culture (491 titles)
* African-, Asian-, and Hispanic-American Experiences (499 titles)
* Human Environmental Impact (495 titles)

Additionally, the project mapped titles in a press-by-theme matrix and identified which themes have the highest scholarly concentration among the Big Ten presses.  "Labor and Work," "Popular Music," and "Theater and Film" rose to the top. 

By integrating AI and data science into the collection development workflow, Big Ten Open Books is augmenting the expertise embedded in Big Ten Academic Alliance libraries and presses to act at scale and overcome the limitations of siloed data. Not only does the work identify exciting new opportunities for BTOB collections, but it may also provide a helpful model for organizations looking to revitalize scholarly backlists and make high-quality research more accessible.