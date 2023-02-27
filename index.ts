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
  title: ({ value }) => `My ${value} Title`,
  enableBackButton: true,
  showSubmitButton: true,
};

const createStep =
  (value: boolean) =>
  (stepConfiguration: WorkflowStepConfiguration): WorkflowStep => {
    const params = {};
    return {
      title:
        typeof stepConfiguration.title === 'function'
          ? stepConfiguration.title({ value })
          : stepConfiguration.title,
      showBackButton: stepConfiguration.enableBackButton, // could be more logic here
      showSubmitButton: stepConfiguration.showSubmitButton,
    };
  };

const createTrueStep = createStep(true);

appDiv.innerHTML = `<p>${JSON.stringify(
  createTrueStep(myStepConfiguration)
)}</p>`;
