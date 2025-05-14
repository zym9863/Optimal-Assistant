import React, { useState } from 'react';

interface PastChoice {
  description: string;
  outcome: string;
}

interface AlternativeScenario {
  alternativeOption: string;
  potentialImpact: string;
  potentialOutcome: string;
}

const IfOnlySimulator: React.FC = () => {
  const [pastChoice, setPastChoice] = useState<PastChoice>({ description: '', outcome: '' });
  const [alternativeScenario, setAlternativeScenario] = useState<AlternativeScenario>({
    alternativeOption: '',
    potentialImpact: '',
    potentialOutcome: '',
  });
  const [showReflection, setShowReflection] = useState(false);

  const handlePastChoiceChange = (field: keyof PastChoice, value: string) => {
    setPastChoice(prev => ({ ...prev, [field]: value }));
  };

  const handleAlternativeScenarioChange = (field: keyof AlternativeScenario, value: string) => {
    setAlternativeScenario(prev => ({ ...prev, [field]: value }));
  };

  const startReflection = () => {
    if (pastChoice.description && pastChoice.outcome && alternativeScenario.alternativeOption) {
      setShowReflection(true);
    } else {
      alert("请填写所有必填项：过去的选择描述、当前结果以及当初不如选择的替代方案。");
    }
  };

  return (
    <div className="if-only-simulator">
      <h2>“如果当初”情景模拟</h2>

      <div className="past-choice-section">
        <h3>回顾过去的选择</h3>
        <textarea
          placeholder="描述你过去做出的某个重要选择..."
          value={pastChoice.description}
          onChange={(e) => handlePastChoiceChange('description', e.target.value)}
          rows={3}
        />
        <textarea
          placeholder="描述这个选择带来的当前结果..."
          value={pastChoice.outcome}
          onChange={(e) => handlePastChoiceChange('outcome', e.target.value)}
          rows={3}
        />
      </div>

      <div className="alternative-scenario-section">
        <h3>设想替代方案</h3>
        <input
          type="text"
          placeholder="当初不如选择的替代方案是什么？"
          value={alternativeScenario.alternativeOption}
          onChange={(e) => handleAlternativeScenarioChange('alternativeOption', e.target.value)}
        />
        <button onClick={startReflection} disabled={!pastChoice.description || !pastChoice.outcome || !alternativeScenario.alternativeOption}>
          开始情景模拟
        </button>
      </div>

      {showReflection && (
        <div className="reflection-section">
          <h3>情景模拟与反思</h3>
          <p><strong>如果当初选择了“{alternativeScenario.alternativeOption}”，可能会有什么不同？</strong></p>
          <textarea
            placeholder="思考并记录如果选择了替代方案，可能会带来的不同影响（例如，对个人成长、人际关系、职业发展等）..."
            value={alternativeScenario.potentialImpact}
            onChange={(e) => handleAlternativeScenarioChange('potentialImpact', e.target.value)}
            rows={5}
          />
          <textarea
            placeholder="设想一下，如果当初选择了替代方案，可能会出现的不同结果是什么？"
            value={alternativeScenario.potentialOutcome}
            onChange={(e) => handleAlternativeScenarioChange('potentialOutcome', e.target.value)}
            rows={5}
          />
          <div className="summary">
            <p><strong>回顾：</strong> 我曾选择 "{pastChoice.description}"，结果是 "{pastChoice.outcome}"。</p>
            <p><strong>设想：</strong> 如果当初选择了 "{alternativeScenario.alternativeOption}"，可能会产生 "{alternativeScenario.potentialImpact}" 的影响，并可能导致 "{alternativeScenario.potentialOutcome}" 的结果。</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IfOnlySimulator;
