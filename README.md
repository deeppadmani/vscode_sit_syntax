# CScriptSIT Language Support for VS Code

A Visual Studio Code extension that provides syntax highlighting and language support for CScriptSIT (`.sit`) files.

## Features

✅ **Syntax Highlighting** for all 72 CScriptSIT keywords  
✅ **Bold formatting** for all `$sit_` and `$cs_` commands  
✅ **Color-coded** keywords, strings, comments, and numbers  
✅ **Auto-detection** of `.sit` files  
✅ **Custom dark theme** optimized for CScriptSIT  
✅ **Autocomplete support** (optional)

## Supported Keywords

### Control Flow (9)
- `$sit_if`, `$sit_ifdef`, `$sit_ifdef_else`, `$sit_ifdef_end`
- `$sit_ifelse`, `$sit_ifend`, `$sit_elseifdef`
- `$sit_loop`, `$sit_loopend`

### Test Management (11)
- `$sit_testcasestart`, `$sit_testcaseend`, `$sit_testcaseinitcond`
- `$sit_testreportstart`, `$sit_testreportend`
- `$sit_teststepstart`, `$sit_teststepend`, `$sit_testsubstepstart`
- `$sit_testuseraction`, `$sit_teststrategy`
- `$sit_TestCaseFailOnWfcFailure`

### Verification (6)
- `$sit_verifyresult`, `$sit_verifyresultpending`
- `$sit_checkbits`, `$sit_checktestresulteq`
- `$sit_comparebyteseq`, `$sit_compareptfilecontenteq`

### Logic & BLE Analyzer (6)
- `$sit_LogicAnalyzerStart`, `$sit_LogicAnalyzerStop`
- `$sit_LogicAnalyzerSave`, `$sit_LogicAnalyzerConfigure`
- `$sit_bleanalyzerstart`, `$sit_bleanlayzerstop`

### Actions (9)
- `$sit_procedure`, `$sit_runscript`
- `$sit_delay`, `$sit_delaytime`, `$sit_input`, `$sit_exit`
- `$sit_starttimer`, `$sit_scripttimestart`, `$sit_scripttimestop`

### Documentation (7)
- `$sit_materials`, `$sit_additionalmaterials`
- `$sit_estefffort`, `$sit_revieweffort`
- `$sit_traceability`, `$sit_addnote`, `$sit_print`

### Utility (11)
- `$sit_clear`, `$sit_clearpatchdata`
- `$sit_isbitset`, `$sit_isbitclear`
- `$sit_loadptuoutputfile`
- `$sit_getpassfailfromuser`, `$sit_getpassfailfromuserwithinput`
- `$sit_yesno`, `$sit_waitforlifecount`
- `$sit_waitforoneminnot1`, `$sit_waitforuseraction`

### Manufacturing Data (4)
- `$sit_mfgdataread`, `$sit_mfgdatawrite`
- `$sit_mfgdatasetvar`, `$sit_mfgdatarestoredefault`

### CS Commands (5)
- `$cs_cslog`, `$cs_echo`, `$cs_exit`
- `$cs_pause`, `$cs_print`

### Special Keywords (4)
- `Yes`, `No`, `none`, `continue`

**Total: 72 Keywords**

---

## Installation

### Method 1: Manual Installation (Recommended)

#### Step 1: Download/Create Extension Files

Create a folder named `cscriptsit` with this structure:

```
cscriptsit/
├── package.json
├── language-configuration.json
├── syntaxes/
│   └── cscriptsit.tmLanguage.json
└── themes/
    └── cscriptsit-dark-theme.json
```

#### Step 2: Copy Extension Files

**Option A: Using File Explorer**

1. Press `Windows + R`
2. Type: `%USERPROFILE%\.vscode\extensions`
3. Press Enter
4. Copy your `cscriptsit` folder here

**Option B: Using Command Prompt**

```cmd
cd %USERPROFILE%\.vscode\extensions
mkdir cscriptsit
cd cscriptsit
mkdir syntaxes
mkdir themes
```

Then copy all the files to their respective locations.

#### Step 3: Restart VS Code

1. Close **ALL** VS Code windows
2. Reopen VS Code

---

### Method 2: Install from VSIX Package

If you have a `.vsix` package file:

#### Using Command Line:
```cmd
code --install-extension cscriptsit-2.0.0.vsix
```

#### Using VS Code UI:
1. Open VS Code
2. Press `Ctrl+Shift+P`
3. Type: **"Extensions: Install from VSIX"**
4. Select the `.vsix` file
5. Restart VS Code

---

### Method 3: Package and Install (For Developers)

If you want to create a `.vsix` package:

#### Prerequisites:
- Node.js (v20 or higher)
- npm

#### Steps:

1. **Install vsce (VS Code Extension Manager)**
   ```cmd
   npm install -g @vscode/vsce
   ```

2. **Navigate to extension folder**
   ```cmd
   cd path\to\cscriptsit
   ```

3. **Package the extension**
   ```cmd
   vsce package
   ```
   This creates a `.vsix` file (e.g., `cscriptsit-2.0.0.vsix`)

4. **Install the package**
   ```cmd
   code --install-extension cscriptsit-2.0.0.vsix
   ```

5. **Restart VS Code**

---

## Usage

### 1. Select Language

When you open a `.sit` file, VS Code should automatically detect it as "CScriptSIT".

If not:
1. Click the language indicator in the **bottom-right corner**
2. Type: **"CScriptSIT"**
3. Press Enter

### 2. Activate Theme (Optional)

To use the custom CScriptSIT Cool Dark theme:

1. Press `Ctrl+K Ctrl+T` (hold Ctrl, press K, then press T)
2. Select **"CScriptSIT Cool Dark"**

### 3. Start Coding!

All `$sit_` and `$cs_` keywords will be:
- **Bold** for easy visibility
- **Color-coded** (cyan/teal)
- Automatically highlighted

---

## Color Scheme

| Element | Color | Style |
|---------|-------|-------|
| **Keywords** (`$sit_*`, `$cs_*`) | Cyan (#4EC9B0) | **Bold** |
| **Strings** | Orange (#CE9178) | Normal |
| **Numbers** | Light Green (#B5CEA8) | Normal |
| **Comments** (`//`) | Green (#6A9955) | *Italic* |
| **Special Keywords** (`Yes`, `No`, `none`, `continue`) | Blue (#569CD6) | **Bold** |

---

## Troubleshooting

### Issue: Language not detected

**Solution:**
1. Manually select language (click bottom-right corner)
2. Choose "CScriptSIT"
3. Or add to VS Code settings:
   ```json
   {
     "files.associations": {
       "*.sit": "cscriptsit"
     }
   }
   ```

### Issue: Keywords not bold

**Solution:**
1. Make sure you're using the "CScriptSIT Cool Dark" theme
2. Press `Ctrl+K Ctrl+T` and select it
3. Or add to your `settings.json`:
   ```json
   {
     "editor.tokenColorCustomizations": {
       "textMateRules": [
         {
           "scope": "keyword.sit.cscriptsit",
           "settings": {
             "fontStyle": "bold"
           }
         }
       ]
     }
   }
   ```

### Issue: Syntax highlighting not working

**Solution:**
1. Press `Ctrl+Shift+P`
2. Type: **"Developer: Reload Window"**
3. Press Enter

### Issue: Extension not loading

**Solution:**
1. Check if files exist:
   ```cmd
   dir %USERPROFILE%\.vscode\extensions\cscriptsit
   ```
2. Verify all files are present
3. Restart VS Code
4. Check VS Code's Output panel (View → Output → Select "Log (Extension Host)")

---

## Uninstallation

### Method 1: Delete Extension Folder
```cmd
cd %USERPROFILE%\.vscode\extensions
rmdir /s /q cscriptsit
```

### Method 2: Using VS Code
1. Press `Ctrl+Shift+X`
2. Search for "CScriptSIT"
3. Click the gear icon → Uninstall

Then restart VS Code.

---

## File Structure

```
cscriptsit/
├── package.json                    # Extension manifest
├── language-configuration.json     # Language features (comments, brackets)
├── syntaxes/
│   └── cscriptsit.tmLanguage.json # Syntax highlighting rules
├── themes/
│   └── cscriptsit-dark-theme.json # Color theme
└── README.md                       # This file
```

---

## Configuration Files

### package.json
Defines the extension, language, and theme configuration.

### language-configuration.json
Defines language features:
- Comment syntax
- Bracket pairs
- Auto-closing pairs

### syntaxes/cscriptsit.tmLanguage.json
TextMate grammar file that defines:
- Keyword patterns
- Syntax scopes
- Token matching rules

### themes/cscriptsit-dark-theme.json
VS Code color theme that defines:
- Editor colors
- Token colors
- Font styles (bold, italic)

---

## Requirements

- **Visual Studio Code**: Version 1.60.0 or higher
- **Operating System**: Windows, macOS, or Linux

---

## Version History

### Version 2.0.0 (Latest)
- ✅ All 72 keywords supported
- ✅ Bold formatting for all dollar commands
- ✅ Improved syntax highlighting
- ✅ Custom dark theme
- ✅ Better keyword detection

### Version 1.0.0
- Initial release
- Basic syntax highlighting

---

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Verify all files are in correct locations
3. Check VS Code's Output panel for errors

---

## License

This extension is provided as-is for internal use.

---

## Author

Created for CScriptSIT language support in VS Code.

---

**Enjoy coding with CScriptSIT! 🚀**