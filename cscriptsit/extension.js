const vscode = require('vscode');

// All 72 keywords with descriptions
const keywords = [
  // Control Flow
  { label: '$sit_if', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Conditional statement' },
  { label: '$sit_ifdef', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Check if defined' },
  { label: '$sit_ifdef_else', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Else clause for ifdef' },
  { label: '$sit_ifdef_end', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'End ifdef block' },
  { label: '$sit_ifelse', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Else clause' },
  { label: '$sit_ifend', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'End if block' },
  { label: '$sit_elseifdef', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Else if defined' },
  { label: '$sit_loop', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'Start loop' },
  { label: '$sit_loopend', kind: vscode.CompletionItemKind.Keyword, detail: 'Control Flow', documentation: 'End loop' },
  
  // Test Management
  { label: '$sit_testcasestart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test case' },
  { label: '$sit_testcaseend', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'End test case' },
  { label: '$sit_testcaseinitcond', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Test case initial condition' },
  { label: '$sit_testreportstart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test report' },
  { label: '$sit_testreportend', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'End test report' },
  { label: '$sit_teststepstart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test step' },
  { label: '$sit_teststepend', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'End test step' },
  { label: '$sit_testsubstepstart', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Start test substep' },
  { label: '$sit_testuseraction', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'User action in test' },
  { label: '$sit_teststrategy', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Define test strategy' },
  { label: '$sit_TestCaseFailOnWfcFailure', kind: vscode.CompletionItemKind.Function, detail: 'Test Management', documentation: 'Fail on WFC failure' },
  
  // Verification
  { label: '$sit_verifyresult', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Verify test result' },
  { label: '$sit_verifyresultpending', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Verify result pending' },
  { label: '$sit_checkbits', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Check bit values' },
  { label: '$sit_checktestresulteq', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Check if test result equals' },
  { label: '$sit_comparebyteseq', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Compare byte sequence' },
  { label: '$sit_compareptfilecontenteq', kind: vscode.CompletionItemKind.Function, detail: 'Verification', documentation: 'Compare PT file content' },
  
  // Logic Analyzer
  { label: '$sit_LogicAnalyzerStart', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Start logic analyzer' },
  { label: '$sit_LogicAnalyzerStop', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Stop logic analyzer' },
  { label: '$sit_LogicAnalyzerSave', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Save logic analyzer data' },
  { label: '$sit_LogicAnalyzerConfigure', kind: vscode.CompletionItemKind.Function, detail: 'Logic Analyzer', documentation: 'Configure logic analyzer' },
  { label: '$sit_bleanalyzerstart', kind: vscode.CompletionItemKind.Function, detail: 'BLE Analyzer', documentation: 'Start BLE analyzer' },
  { label: '$sit_bleanlayzerstop', kind: vscode.CompletionItemKind.Function, detail: 'BLE Analyzer', documentation: 'Stop BLE analyzer' },
  
  // Actions
  { label: '$sit_procedure', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Execute procedure' },
  { label: '$sit_runscript', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Run external script' },
  { label: '$sit_delay', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Add delay in milliseconds' },
  { label: '$sit_delaytime', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Add timed delay' },
  { label: '$sit_input', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Get user input' },
  { label: '$sit_exit', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Exit script' },
  { label: '$sit_starttimer', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Start timer' },
  { label: '$sit_scripttimestart', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Start script timing' },
  { label: '$sit_scripttimestop', kind: vscode.CompletionItemKind.Function, detail: 'Actions', documentation: 'Stop script timing' },
  
  // Data & Documentation
  { label: '$sit_materials', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Define materials needed' },
  { label: '$sit_additionalmaterials', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Add additional materials' },
  { label: '$sit_estefffort', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Estimated effort' },
  { label: '$sit_revieweffort', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Review effort' },
  { label: '$sit_traceability', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Add traceability info' },
  { label: '$sit_addnote', kind: vscode.CompletionItemKind.Function, detail: 'Documentation', documentation: 'Add note' },
  { label: '$sit_print', kind: vscode.CompletionItemKind.Function, detail: 'Output', documentation: 'Print message' },
  
  // Utility
  { label: '$sit_clear', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Clear data' },
  { label: '$sit_clearpatchdata', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Clear patch data' },
  { label: '$sit_isbitset', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Check if bit is set' },
  { label: '$sit_isbitclear', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Check if bit is clear' },
  { label: '$sit_loadptuoutputfile', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Load PTU output file' },
  { label: '$sit_getpassfailfromuser', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Get pass/fail from user' },
  { label: '$sit_getpassfailfromuserwithinput', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Get pass/fail with input' },
  { label: '$sit_yesno', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Yes/No prompt' },
  { label: '$sit_waitforlifecount', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Wait for life count' },
  { label: '$sit_waitforoneminnot1', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Wait for one min not 1' },
  { label: '$sit_waitforuseraction', kind: vscode.CompletionItemKind.Function, detail: 'Utility', documentation: 'Wait for user action' },
  
  // Manufacturing Data
  { label: '$sit_mfgdataread', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Read manufacturing data' },
  { label: '$sit_mfgdatawrite', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Write manufacturing data' },
  { label: '$sit_mfgdatasetvar', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Set manufacturing variable' },
  { label: '$sit_mfgdatarestoredefault', kind: vscode.CompletionItemKind.Function, detail: 'MFG Data', documentation: 'Restore default MFG data' },
  
  // CS Commands
  { label: '$cs_cslog', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'CS log message' },
  { label: '$cs_echo', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'Echo message' },
  { label: '$cs_exit', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'CS exit' },
  { label: '$cs_pause', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'Pause execution' },
  { label: '$cs_print', kind: vscode.CompletionItemKind.Function, detail: 'CS Commands', documentation: 'Print message' },
  
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