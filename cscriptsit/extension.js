const vscode = require('vscode');

// All 72 keywords with descriptions
const keywords = [
  // Control Flow
  { label: '$sit_If', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Conditional statement' },
  { label: '$sit_IfDef', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Check if defined' },
  { label: '$sit_IfDef_Else', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Else clause for ifdef' },
  { label: '$sit_IfDef_End', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'End ifdef block' },
  { label: '$sit_IfElse', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Else clause' },
  { label: '$sit_IfEnd', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'End if block' },
  { label: '$sit_ElseIfDef', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Else if defined' },
  { label: '$sit_Loop', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Start loop' },
  { label: '$sit_LoopEnd', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'End loop' },
  
  // Test Management
  { label: '$sit_TestCaseStart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test case' },
  { label: '$sit_TestCaseEnd', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'End test case' },
  { label: '$sit_TestCaseInitCond', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Test case initial condition' },
  { label: '$sit_TestReportStart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test report' },
  { label: '$sit_TestReportEnd', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'End test report' },
  { label: '$sit_TestStepStart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test step' },
  { label: '$sit_TestStepEnd', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'End test step' },
  { label: '$sit_TestSubStepStart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test substep' },
  { label: '$sit_TestUserAction', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'User action in test' },
  { label: '$sit_TestStrategy', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Define test strategy' },
  { label: '$sit_TestCaseFailOnWfcFailure', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Fail on WFC failure' },
  
  // Verification
  { label: '$sit_VerifyResult', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Verify test result' },
  { label: '$sit_VerifyResultPending', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Verify result pending' },
  { label: '$sit_CheckBits', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Check bit values' },
  { label: '$sit_CheckTestResultEq', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Check if test result equals' },
  { label: '$sit_CompareBytesEq', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Compare byte sequence' },
  { label: '$sit_ComparePtFileContentEq', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Compare PT file content' },
  
  // Logic Analyzer
  { label: '$sit_LogicAnalyzerStart', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Start logic analyzer' },
  { label: '$sit_LogicAnalyzerStop', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Stop logic analyzer' },
  { label: '$sit_LogicAnalyzerSave', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Save logic analyzer data' },
  { label: '$sit_LogicAnalyzerConfigure', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Configure logic analyzer' },
  { label: '$sit_BleAnalyzerStart', kind: vscode.CompletionItemKind.Function, detail: 'BLE Analyzer', documentation: 'Start BLE analyzer' },
  { label: '$sit_BleAnalyzerStop', kind: vscode.CompletionItemKind.Function, detail: 'BLE Analyzer', documentation: 'Stop BLE analyzer' },
  
  // Actions
  { label: '$sit_Procedure', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Execute procedure' },
  { label: '$sit_RunScript', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Run external script' },
  { label: '$sit_Delay', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Add delay in milliseconds' },
  { label: '$sit_DelayTime', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Add timed delay' },
  { label: '$sit_Input', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Get user input' },
  { label: '$sit_Exit', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Exit script' },
  { label: '$sit_StartTimer', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Start timer' },
  { label: '$sit_ScriptTimeStart', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Start script timing' },
  { label: '$sit_ScriptTimeStop', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Stop script timing' },
  
  // Data & Documentation
  { label: '$sit_Materials', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Define materials needed' },
  { label: '$sit_AdditionalMaterials', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Add additional materials' },
  { label: '$sit_EstEffort', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Estimated effort' },
  { label: '$sit_ReviewEffort', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Review effort' },
  { label: '$sit_Traceability', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Add traceability info' },
  { label: '$sit_AddNote', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Add note' },
  { label: '$sit_Print', kind: vscode.CompletionItemKind.Function, detail: 'Output', documentation: 'Print message' },
  
  // Utility
  { label: '$sit_Clear', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Clear data' },
  { label: '$sit_ClearPatchData', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Clear patch data' },
  { label: '$sit_IsBitSet', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Check if bit is set' },
  { label: '$sit_IsBitClear', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Check if bit is clear' },
  { label: '$sit_LoadPtuOutputFile', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Load PTU output file' },
  { label: '$sit_GetPassFailFromUser', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Get pass/fail from user' },
  { label: '$sit_GetPassFailFromUserWithInput', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Get pass/fail with input' },
  { label: '$sit_YesNo', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Yes/No prompt' },
  { label: '$sit_WaitForLifeCount', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Wait for life count' },
  { label: '$sit_WaitForOneMinNot1', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Wait for one min not 1' },
  { label: '$sit_WaitForUserAction', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Wait for user action' },
  
  // Manufacturing Data
  { label: '$sit_MfgDataRead', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Read manufacturing data' },
  { label: '$sit_MfgDataWrite', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Write manufacturing data' },
  { label: '$sit_MfgDataSetVar', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Set manufacturing variable' },
  { label: '$sit_MfgDataRestoreDefault', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Restore default MFG data' },
  
  // CS Commands
  { label: '$cs_CsLog', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'CS log message' },
  { label: '$cs_Echo', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'Echo message' },
  { label: '$cs_Exit', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'CS exit' },
  { label: '$cs_Pause', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'Pause execution' },
  { label: '$cs_Print', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'Print message' },
  
  // Special Keywords
  { label: 'Yes', kind: vscode.CompletionItemKind.Constant, detail: 'Boolean', documentation: 'Boolean true value' },
  { label: 'No', kind: vscode.CompletionItemKind.Constant, detail: 'Boolean', documentation: 'Boolean false value' },
  { label: 'none', kind: vscode.CompletionItemKind.Constant, detail: 'Special', documentation: 'None value' },
  { label: 'continue', kind: vscode.CompletionItemKind.Constant, detail: 'Special', documentation: 'Continue execution' }
];

function activate(context) {
  console.log('CScriptSIT extension is now active');

  const provider = vscode.languages.registerCompletionItemProvider(
  'cscriptsit',
  {
    provideCompletionItems(document, position) {
      const line = document.lineAt(position).text;
      const prefix = line.substring(0, position.character);
      
      // Find where the $ starts
      const match = prefix.match(/\$[\w_]*$/);
      if (!match) return undefined;
      
      const startOffset = position.character - match[0].length;
      
      return keywords.map(kw => {
        const item = new vscode.CompletionItem(kw.label, kw.kind);
        item.detail = kw.detail;
        item.documentation = new vscode.MarkdownString(kw.documentation);
        
        // Define the range to replace (from $ to cursor)
        item.range = new vscode.Range(
          position.line,
          startOffset,
          position.line,
          position.character
        );
        
        // This is what gets inserted
        item.insertText = kw.label;
        
        // Prevent additional behavior
        item.keepWhitespace = true;
        
        return item;
      });
    }
  },
  '$'
);

context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};