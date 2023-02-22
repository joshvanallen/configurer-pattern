// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


interface WorkflowStepConfiguration {
  readonly title: string | ((params: any) => string);
  readonly enableBackButton: boolean;
  readonly showSubmitButton: boolean;
}

interface WorkflowStep {
  readonly title: string;
  readonly showBackButton: boolean;
  readonly showSubmitButton: boolean;
}

const myStepConfiguration: WorkflowStepConfiguration = {
  title: () => 'My Title',
  enableBackButton: true,
  showSubmitButton: true,
};

function createStep(
  stepConfiguration: WorkflowStepConfiguration
): WorkflowStep {
  const params = {};
  return {
    title:
      typeof stepConfiguration.title === 'function'
        ? stepConfiguration.title(params)
        : stepConfiguration.title,
    showBackButton: stepConfiguration.enableBackButton, // could be more logic here
    showSubmitButton: stepConfiguration.showSubmitButton,
  };
}

appDiv.innerHTML = `<p>${JSON.stringify(createStep(myStepConfiguration))}</p>`;
