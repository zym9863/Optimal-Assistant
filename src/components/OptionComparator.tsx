import React, { useState } from 'react';

interface Dimension {
  name: string;
  weight: number;
  scores: { [optionName: string]: number };
}

interface Option {
  name: string;
}

const OptionComparator: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([{ name: '' }, { name: '' }]);
  const [dimensions, setDimensions] = useState<Dimension[]>([]);
  const [results, setResults] = useState<{ [optionName: string]: number }>({});

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = { name: value };
    setOptions(newOptions);
  };

  const addOption = () => {
    if (options.length < 5) { // 限制最多5个选项
      setOptions([...options, { name: '' }]);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) { // 至少保留2个选项
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
      // 清理已删除选项在维度中的得分
      const newDimensions = dimensions.map(dim => {
        const newScores = { ...dim.scores };
        delete newScores[options[index].name];
        return { ...dim, scores: newScores };
      });
      setDimensions(newDimensions);
    }
  };

  const handleDimensionNameChange = (index: number, value: string) => {
    const newDimensions = [...dimensions];
    newDimensions[index].name = value;
    setDimensions(newDimensions);
  };

  const handleDimensionWeightChange = (index: number, value: string) => {
    const newDimensions = [...dimensions];
    newDimensions[index].weight = parseFloat(value) || 0;
    setDimensions(newDimensions);
  };

  const handleDimensionScoreChange = (dimIndex: number, optionName: string, value: string) => {
    const newDimensions = [...dimensions];
    newDimensions[dimIndex].scores[optionName] = parseFloat(value) || 0;
    setDimensions(newDimensions);
  };

  const addDimension = () => {
    const newDimension: Dimension = {
      name: '',
      weight: 1,
      scores: options.reduce((acc, option) => {
        if (option.name) {
          acc[option.name] = 0;
        }
        return acc;
      }, {} as { [optionName: string]: number })
    };
    setDimensions([...dimensions, newDimension]);
  };

  const removeDimension = (index: number) => {
    const newDimensions = dimensions.filter((_, i) => i !== index);
    setDimensions(newDimensions);
  };

  const calculateScores = () => {
    const calculatedResults: { [optionName: string]: number } = {};
    options.forEach(option => {
      if (option.name) {
        calculatedResults[option.name] = 0;
      }
    });

    dimensions.forEach(dim => {
      if (dim.weight > 0) {
        options.forEach(option => {
          if (option.name && dim.scores[option.name]) {
            calculatedResults[option.name] += dim.scores[option.name] * dim.weight;
          }
        });
      }
    });
    setResults(calculatedResults);
  };

  return (
    <div className="option-comparator">
      <h2>选项对比器</h2>

      <div>
        <h3>待选项</h3>
        {options.map((option, index) => (
          <div key={index} className="option-input-group">
            <input
              type="text"
              placeholder={`选项 ${index + 1}`}
              value={option.name}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {options.length > 2 && (
              <button onClick={() => removeOption(index)}>移除</button>
            )}
          </div>
        ))}
        <button onClick={addOption} disabled={options.length >= 5}>添加选项</button>
      </div>

      <div>
        <h3>衡量维度</h3>
        {dimensions.map((dim, dimIndex) => (
          <div key={dimIndex} className="dimension-input-group">
            <input
              type="text"
              placeholder={`维度 ${dimIndex + 1} 名称`}
              value={dim.name}
              onChange={(e) => handleDimensionNameChange(dimIndex, e.target.value)}
            />
            <input
              type="number"
              placeholder="权重"
              value={dim.weight}
              min="0"
              step="0.1"
              onChange={(e) => handleDimensionWeightChange(dimIndex, e.target.value)}
            />
            <div className="dimension-scores">
              {options.map((option, optIndex) => (
                option.name && (
                  <div key={optIndex} className="score-input">
                    <label htmlFor={`score-${dimIndex}-${optIndex}`}>{option.name} 得分:</label>
                    <input
                      id={`score-${dimIndex}-${optIndex}`}
                      type="number"
                      placeholder="得分"
                      value={dim.scores[option.name] || ''}
                      onChange={(e) => handleDimensionScoreChange(dimIndex, option.name, e.target.value)}
                    />
                  </div>
                )
              ))}
            </div>
            <button onClick={() => removeDimension(dimIndex)}>移除维度</button>
          </div>
        ))}
        <button onClick={addDimension}>添加维度</button>
      </div>

      <button onClick={calculateScores} disabled={options.some(o => !o.name) || dimensions.length === 0}>
        计算得分
      </button>

      {Object.keys(results).length > 0 && (
        <div className="results-display">
          <h3>对比结果</h3>
          <ul>
            {Object.entries(results)
              .sort(([, a], [, b]) => b - a) // 按得分降序排列
              .map(([optionName, score], index) => {
                // 计算最高分的百分比，用于显示进度条
                const maxScore = Math.max(...Object.values(results));
                const percentage = (score / maxScore) * 100;

                return (
                  <li key={optionName} className={index === 0 ? 'top-option' : ''}>
                    <div className="option-result-info">
                      <span className="option-name">{optionName}</span>
                      <span className="option-score">{score.toFixed(2)}</span>
                    </div>
                    <div className="score-bar-container">
                      <div
                        className="score-bar"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </li>
                );
              })}
          </ul>
          {Object.keys(results).length > 0 && <div className="best-choice-label">推荐选择</div>}
        </div>
      )}
    </div>
  );
};

export default OptionComparator;
