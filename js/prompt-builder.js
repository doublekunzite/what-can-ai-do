// Prompt Builder - Ultra Reliable Version
(function() {
    'use strict';

    // Template definitions with ALL steps
    const templates = {
        study: [
            {
                title: "Step 1: Foundation (5 min)",
                content: "I need to study {{subject}} at a {{level}} level.\nFirst, create a concise study guide that covers the key concepts I must understand.\nInclude 3-5 main topics with brief descriptions."
            },
            {
                title: "Step 2: Active Recall (10 min)",
                content: "Based on the study guide you just provided, generate 10 practice questions about {{subject}}.\nMix question types: 4 definition/fact-based, 3 application problems, and 3 \"explain in your own words\" prompts.\nDon't provide the answers yet—I'll answer them first."
            },
            {
                title: "Step 3: Check & Explain (10 min)",
                content: "Here are my answers to your questions: [PASTE YOUR ANSWERS HERE]\n\nGrade my responses and explain what I got wrong or could improve.\nFor each incorrect answer, provide a detailed explanation and a mnemonic to help me remember it."
            },
            {
                title: "Step 4: Connection & Application (5 min)",
                content: "Now connect {{subject}} to real-world applications or current research.\nGive me 2 examples of how this is used in practice, and 1 area where our understanding is still developing."
            }
        ],
        website: [
            {
                title: "Step 1: Concept & Structure",
                content: "I want to build a website called \"{{website-name}}\" for {{website-purpose}} with {{website-pages}} pages.\nBased on this, suggest:\n1. The essential pages I need and their purpose\n2. A simple folder structure\n3. Whether GitHub Pages is suitable or if I need alternatives\n4. Any security considerations I should know about"
            },
            {
                title: "Step 2: Setup & Initial Files",
                content: "Walk me through the exact steps to set up {{website-name}}:\n1. Create GitHub repository and enable Pages\n2. Create the main index.html with proper HTML5 boilerplate\n3. Create the navigation menu that links all pages\n4. Add basic CSS file with dark/light mode support\n5. Include meta tags for SEO and mobile responsiveness\n\nProvide the complete, ready-to-use code for each file."
            },
            {
                title: "Step 3: Build All Pages",
                content: "Now generate the complete code for all pages of {{website-name}}:\n\nFor each page, provide:\n1. Full HTML with proper semantic tags\n2. Inline CSS for unique styling (if any)\n3. Any necessary JavaScript\n4. Comments explaining security best practices\n\nFocus on: clean structure, accessibility, and loading performance."
            },
            {
                title: "Step 4: Security & Deployment Review",
                content: "Review my {{website-name}} website for security issues and deployment readiness:\n\n1. Check for: XSS vulnerabilities, insecure links, exposed email addresses\n2. Suggest improvements to the code structure\n3. Provide a pre-launch checklist\n4. Explain how to update the site after deployment\n5. Suggest tools for monitoring and maintenance"
            },
            {
                title: "Step 5: Customization Guide",
                content: "I want to customize {{website-name}} further. Guide me through:\n\n1. How to modify the design without breaking functionality\n2. Adding new pages or sections\n3. Integrating simple forms (contact, newsletter) securely\n4. Adding analytics while respecting privacy\n5. Optimizing for search engines"
            }
        ],
        research: [
            {
                title: "Step 1: Research Plan",
                content: "I need to research \"{{topic}}\".\nFirst, help me create a research plan. What are the 5-7 key sub-topics I should investigate?\nFor each, suggest 2-3 search terms and 1-2 types of sources to look for."
            },
            {
                title: "Step 2: Source Evaluation",
                content: "I've found {{sources}} sources. Help me evaluate them:\n1. Sort them by credibility (peer-reviewed > academic > government > NGO > news > blog)\n2. Identify 3 sources that might have bias and explain what to watch for\n3. Suggest which 5-7 sources I should prioritize reading first"
            },
            {
                title: "Step 3: Synthesis",
                content: "Based on these sources about \"{{topic}}\", create a synthesis matrix:\n- 3 main schools of thought or approaches\n- 2 areas of consensus across sources\n- 3 major debates or disagreements\n- 4 gaps in current research"
            },
            {
                title: "Step 4: Outline & Draft",
                content: "Create a detailed outline for my research report on \"{{topic}}\".\n\nInclude:\n1. Executive summary structure\n2. Main sections with key points\n3. Data visualization suggestions\n4. References format\n\nThen help me draft the introduction section."
            }
        ],
        write: [
            {
                title: "Step 1: Define & Research",
                content: "I need to create {{content-type}} about {{topic}} for {{audience}}.\nFirst, help me:\n1. Define the core message and key takeaways\n2. Research 5-7 key points with supporting data or examples\n3. Identify the appropriate tone and style\n4. Outline the structure with estimated word counts"
            },
            {
                title: "Step 2: Draft First Version",
                content: "Based on the research and outline, write the first draft of {{content-type}}.\n\nRequirements:\n- Compelling headline/title\n- Strong opening that hooks {{audience}}\n- Clear structure with smooth transitions\n- Include specific examples and data points\n- Call-to-action or clear conclusion\n\nTarget length: {{word-count}} words"
            },
            {
                title: "Step 3: Review & Improve",
                content: "Review this draft and provide detailed feedback: [PASTE YOUR DRAFT HERE]\n\nEvaluate for:\n1. Clarity and coherence (is the message clear?)\n2. Engagement (will {{audience}} care?)\n3. Accuracy (are facts correct and well-supported?)\n4. Style (is the tone consistent and appropriate?)\n\nProvide specific suggestions for improvement."
            },
            {
                title: "Step 4: Polish & Finalize",
                content: "Now help me create the final version:\n1. Apply all suggested improvements\n2. Optimize the headline/title for engagement\n3. Strengthen the opening and conclusion\n4. Ensure consistent voice and tone\n5. Add any missing transitions or examples"
            }
        ],
        solve: [
            {
                title: "Step 1: Define the Problem",
                content: "I'm trying to solve: {{problem-description}}\n\nHelp me clearly define:\n1. What success looks like (specific, measurable outcome)\n2. Constraints and limitations\n3. What I've already tried\n4. What resources/tools I have available"
            },
            {
                title: "Step 2: Generate Solutions",
                content: "Based on this problem, generate 5-7 distinct solution approaches.\n\nFor each approach:\n1. Brief description of the method\n2. Pros and cons\n3. Estimated time/effort required\n4. Risk level (high/medium/low)\n\nPrioritize creative but practical solutions."
            },
            {
                title: "Step 3: Evaluate & Plan",
                content: "I've reviewed the solutions. Help me choose and plan implementation.\n\nMy top 3 choices: [LIST THEM]\n\nFor my #1 choice, create a detailed action plan:\n1. Step-by-step implementation\n2. Required resources\n3. Timeline with milestones\n4. Contingency plans if it fails"
            }
        ],
        code: [
            {
                title: "Step 1: Requirements & Design",
                content: "I want to build: {{project-description}}\n\nHelp me create technical requirements:\n1. Core features (MVP scope)\n2. Tech stack suggestions ({{language}})\n3. Database/schema needs\n4. API requirements\n5. Testing strategy"
            },
            {
                title: "Step 2: Implementation Plan",
                content: "Break down {{project-description}} into implementation steps:\n\n1. Project structure and file organization\n2. Core functionality implementation order\n3. Integration points and dependencies\n4. Error handling and edge cases\n5. Documentation needs\n\nProvide code snippets for key components."
            },
            {
                title: "Step 3: Code Review",
                content: "Review my code: [PASTE CODE HERE]\n\nCheck for:\n1. Bugs and errors\n2. Performance issues\n3. Security vulnerabilities\n4. Best practices compliance\n5. Code readability\n\nProvide specific, actionable feedback."
            }
        ],
        analyze: [
            {
                title: "Step 1: Data Understanding",
                content: "I have data about {{dataset-description}}.\n\nHelp me understand it:\n1. What questions can this data answer?\n2. What preprocessing is needed?\n3. What analysis methods are appropriate?\n4. What are potential biases or limitations?"
            },
            {
                title: "Step 2: Analysis Plan",
                content: "Create an analysis plan for {{dataset-description}}:\n\n1. Statistical methods to apply\n2. Visualizations to create\n3. Hypothesis testing approach\n4. Expected findings and significance\n5. Tools needed (Python/R/Excel/etc.)"
            },
            {
                title: "Step 3: Interpret Results",
                content: "Here are my analysis results: [PASTE RESULTS]\n\nHelp me interpret:\n1. What do these results mean in plain English?\n2. Are they statistically significant?\n3. What limitations should I mention?\n4. What are the practical implications?\n5. What further analysis would strengthen conclusions?"
            }
        ]
    };

    // Ultra-reliable initialization
    function initializeWhenReady() {
        const checkReady = setInterval(() => {
            const studyFlow = document.getElementById('study-flow');
            if (studyFlow) {
                clearInterval(checkReady);
                console.log('Prompt Builder: DOM ready, initializing...');
                
                // Initialize first category
                initializeFlow('study');
                
                // Bind category buttons
                bindCategoryButtons();
                
                console.log('Prompt Builder: Initialization complete!');
            }
        }, 100);
    }

    // Initialize flow
    function initializeFlow(category) {
        const flowContainer = document.getElementById(category + '-flow');
        if (!flowContainer) {
            console.error(`Flow container not found: ${category}-flow`);
            return;
        }
        
        const steps = templates[category] || [];
        
        // Clear existing steps (keep h3)
        while (flowContainer.children.length > 1) {
            flowContainer.removeChild(flowContainer.lastChild);
        }
        
        // Add steps
        steps.forEach((step, index) => {
            createStepElement(category, step, index);
        });
        
        updatePlaceholders(category);
    }

    // Create step element
    function createStepElement(category, step, index) {
        const flowContainer = document.getElementById(category + '-flow');
        if (!flowContainer) return;
        
        const stepWrapper = document.createElement('div');
        stepWrapper.className = 'builder-step';
        stepWrapper.innerHTML = `
            <div class="step-box editable">
                <div class="step-header">
                    <h4>${step.title}</h4>
                    <div class="step-actions">
                        <button class="btn-copy" title="Copy this step">Copy</button>
                        <button class="btn-x" title="Delete this step">×</button>
                    </div>
                </div>
                <pre class="step-content" contenteditable="true" data-step-index="${index}">${step.content}</pre>
            </div>
        `;
        
        flowContainer.appendChild(stepWrapper);
        
        // Add event listeners
        const contentEl = stepWrapper.querySelector('.step-content');
        const copyBtn = stepWrapper.querySelector('.btn-copy');
        const deleteBtn = stepWrapper.querySelector('.btn-x');
        
        contentEl.addEventListener('input', () => updateStepData(category, index));
        copyBtn.addEventListener('click', () => copyPromptByIndex(category, index));
        deleteBtn.addEventListener('click', () => deleteStep(category, index));
    }
    
    // Update step data
    function updateStepData(category, index) {
        const contentEl = document.querySelector(`[data-step-index="${index}"]`);
        if (contentEl) {
            templates[category][index].content = contentEl.textContent;
        }
    }
    
    // Bind category buttons
    function bindCategoryButtons() {
        const categoryButtons = document.querySelectorAll('.filter-btn[data-category]');
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const category = button.dataset.category;
                console.log('Switching to category:', category);
                
                document.querySelectorAll('.builder-template').forEach(template => {
                    if (template.id === category + '-template') {
                        template.classList.remove('hidden');
                    } else {
                        template.classList.add('hidden');
                    }
                });
                
                initializeFlow(category);
            });
        });
        
        // Bind parameter inputs
        document.querySelectorAll('.parameter-inputs input, .parameter-inputs select, .parameter-inputs textarea').forEach(input => {
            input.addEventListener('input', () => {
                const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category;
                if (activeCategory) {
                    updatePlaceholders(activeCategory);
                }
            });
        });
    }
    
    // Add new step
    window.addStep = function(category) {
        const newIndex = templates[category].length;
        const newStep = {
            title: `Step ${newIndex + 1}: New Step`,
            content: "Add your prompt content here. Use {{parameter}} for dynamic values."
        };
        
        templates[category].push(newStep);
        createStepElement(category, newStep, newIndex);
    };
    
    // Delete step
    window.deleteStep = function(category, index) {
        if (templates[category].length <= 1) {
            alert('You must have at least one step.');
            return;
        }
        
        if (confirm('Delete this step?')) {
            templates[category].splice(index, 1);
            initializeFlow(category);
        }
    };
    
    // Copy prompt by index
    window.copyPromptByIndex = function(category, index) {
        const step = templates[category][index];
        const fullPrompt = step.title + '\n\n' + step.content;
        
        navigator.clipboard.writeText(fullPrompt).then(() => {
            const btn = document.querySelector(`[data-step-index="${index}"]`).parentElement.querySelector('.btn-copy');
            const originalText = btn.textContent;
            btn.textContent = '✓ Copied!';
            setTimeout(() => btn.textContent = originalText, 1500);
        });
    };
    
    // Update all placeholders
    function updatePlaceholders(category) {
        const template = document.getElementById(category + '-template');
        if (!template) return;
        
        let params = {};
        switch(category) {
            case 'study':
                params.subject = document.getElementById('study-subject')?.value || 'the subject';
                params.level = document.getElementById('study-level')?.value || 'college';
                params.duration = document.getElementById('study-duration')?.value || '30';
                break;
            case 'research':
                params.topic = document.getElementById('research-topic')?.value || 'the topic';
                params.sources = document.getElementById('research-sources')?.value || '15';
                break;
            case 'website':
                params['website-name'] = document.getElementById('website-name')?.value || 'my website';
                params['website-purpose'] = document.getElementById('website-purpose')?.value || 'personal';
                params['website-pages'] = document.getElementById('website-pages')?.value || '3-4';
                break;
            case 'write':
                params['content-type'] = document.getElementById('write-type')?.value || 'a blog post';
                params.topic = document.getElementById('write-topic')?.value || 'the topic';
                params.audience = document.getElementById('write-audience')?.value || 'general readers';
                params['word-count'] = document.getElementById('write-count')?.value || '800';
                break;
            case 'solve':
                params['problem-description'] = document.getElementById('solve-problem')?.value || 'this problem';
                break;
            case 'code':
                params['project-description'] = document.getElementById('code-project')?.value || 'this project';
                params.language = document.getElementById('code-language')?.value || 'Python';
                break;
            case 'analyze':
                params['dataset-description'] = document.getElementById('analyze-dataset')?.value || 'this dataset';
                break;
        }
        
        // Update all step content with placeholders
        const steps = templates[category] || [];
        steps.forEach((step, index) => {
            const contentEl = document.querySelector(`[data-step-index="${index}"]`);
            if (contentEl) {
                let content = step.content;
                Object.keys(params).forEach(key => {
                    const regex = new RegExp(`{{${key}}}`, 'g');
                    content = content.replace(regex, params[key]);
                });
                contentEl.textContent = content;
            }
        });
    }
    
    // Copy all prompts
    window.copyAllPrompts = function(category) {
        const steps = templates[category];
        const allPrompts = steps.map((step, index) => 
            `${step.title}\n\n${step.content}`
        ).join('\n\n---\n\n');
        
        navigator.clipboard.writeText(allPrompts).then(() => {
            alert(`✓ Copied ${steps.length} steps to clipboard!`);
        });
    };
    
    // Reset template
    window.resetTemplate = function(category) {
        if (confirm('Reset all steps to default? This will lose any customizations.')) {
            initializeFlow(category);
        }
    };
    
    // Start initialization
    initializeWhenReady();
})();