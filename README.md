# CScriptSIT Language Support for VS Code

A Visual Studio Code extension that provides syntax highlighting, autocomplete, and language support for CScriptSIT (`.sit`) files.

## Features

✅ **Syntax Highlighting** for all 72 CScriptSIT keywords (case-insensitive)  
✅ **Autocomplete** with intelligent suggestions for all commands  
✅ **Bold formatting** for all `$sit_` and `$cs_` commands  
✅ **Color-coded** keywords, strings, comments, and special elements  
✅ **Auto-detection** of `.sit` files  
✅ **Special highlighting** for filenames, variables, and hash lines  
✅ **Works with any VS Code theme** (recommended: Dobri Next -C09- Eve)

## Installation Methods

### 🎯 **Method 1: Install from VSIX Package (Recommended - Easiest)**

This is the **fastest and simplest** way to install the extension.

#### Prerequisites:
- Visual Studio Code installed

#### Steps:

1. **Download/Obtain the VSIX file**
   - You should have a file like `cscriptsit-1.0.0.vsix`

2. **Install using VS Code UI:**
   - Open VS Code
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type: **"Extensions: Install from VSIX..."**
   - Select your `.vsix` file
   - Click "Install"

   **OR Install using Command Line:**
   ```bash
   code --install-extension cscriptsit-1.0.0.vsix
   ```

3. **Install Dobri Next Theme** (recommended):
   - Open VS Code
   - Press `Ctrl+Shift+X` to open Extensions
   - Search for "Dobri Next"
   - Install "Dobri Next Theme"
   - Press `Ctrl+K Ctrl+T` and select "Dobri Next -C09- Eve"

4. **Configure Custom Colors** (see Configuration section below)

5. **Restart VS Code**
   - Close all VS Code windows
   - Reopen VS Code

✅ **Done!** Your extension is now installed.

---

### 📦 **Method 2: Build and Install from Source (For Developers)**

Use this if you want to modify the extension or build it yourself.

#### Prerequisites:
- Node.js (v14 or higher)
- npm
- Visual Studio Code

#### Steps:

1. **Install vsce (VS Code Extension CLI)**
   ```bash
   npm install -g @vscode/vsce
   ```

2. **Navigate to your extension folder**
   ```bash
   cd path/to/cscriptsit
   ```

3. **Package the extension**
   ```bash
   vsce package
   ```
   This creates `cscriptsit-1.1.0.vsix`

4. **Install the package**
   ```bash
   code --install-extension cscriptsit-1.1.0.vsix
   ```

5. **Install Dobri Next Theme and configure** (see Method 1, steps 3-5)

6. **Restart VS Code**

---

### 🔧 **Method 3: Manual Installation (Advanced)**

For development or testing purposes.

#### Steps:

1. **Copy extension folder to VS Code extensions directory:**

   **Windows:**
   ```bash
   xcopy /E /I cscriptsit "%USERPROFILE%\.vscode\extensions\cscriptsit"
   ```

   **Mac/Linux:**
   ```bash
   cp -r cscriptsit ~/.vscode/extensions/cscriptsit
   ```

2. **Verify folder structure:**
   ```
   .vscode/extensions/cscriptsit/
   ├── package.json
   ├── extension.js
   ├── language-configuration.json
   └── syntaxes/
       └── cscriptsit.tmLanguage.json
   ```

3. **Install Dobri Next Theme and configure** (see Method 1, steps 3-5)

4. **Restart VS Code**

---

## Configuration

### Step 1: Install Dobri Next Theme

1. Open VS Code Extensions (`Ctrl+Shift+X`)
2. Search for **"Dobri Next"**
3. Install **"Dobri Next Theme"**
4. Press `Ctrl+K Ctrl+T`
5. Select **"Dobri Next -C09- Eve"**

### Step 2: Add Custom Color Rules

To get the full CScriptSIT color scheme, add custom token colors to your VS Code settings:

1. **Open User Settings (JSON):**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type: **"Preferences: Open User Settings (JSON)"**
   - Press Enter

2. **Add the following configuration** (merge with your existing settings):

```json
{
    "workbench.colorTheme": "Dobri Next -C09- Eve",
    "code-runner.runInTerminal": true,
    "java.completion.favoriteStaticMembers": [
        "org.junit.Assert.*",
        "org.junit.Assume.*",
        "org.junit.jupiter.api.Assertions.*",
        "org.junit.jupiter.api.Assumptions.*",
        "org.junit.jupiter.api.DynamicContainer.*",
        "org.junit.jupiter.api.DynamicTest.*",
        "org.mockito.Mockito.*",
        "org.mockito.ArgumentMatchers.*",
        "org.mockito.Answers.*"
    ],
    "workbench.iconTheme": "dobri-theme-icons",
    "workbench.sideBar.location": "right",
    "workbench.editorAssociations": {
        "*.docx": "default"
    },
    "makefile.configureOnOpen": true,
    "C_Cpp.errorSquiggles": "enabled",
    "git.autofetch": true,
    "remote.SSH.remotePlatform": {
        "84.247.178.164": "linux",
        "192.168.137.106": "linux",
        "192.168.137.31": "linux",
        "192.168.1.183": "linux",
        "192.168.1.182": "linux"
    },
    "editor.tokenColorCustomizations": {
        "[Dobri Next -C09- Eve]": {
            "textMateRules": [
                {
                    "scope": "comment.line.double-slash.cscriptsit",
                    "settings": {
                        "foreground": "#6A9955",
                        "fontStyle": "italic"
                    }
                },
                {
                    "scope": "comment.block.cscriptsit",
                    "settings": {
                        "foreground": "#6A9955",
                        "fontStyle": "italic"
                    }
                },
                {
                    "scope": "string.quoted.double.cscriptsit",
                    "settings": {
                        "foreground": "#CE9178"
                    }
                },
                {
                    "scope": "constant.character.escape.cscriptsit",
                    "settings": {
                        "foreground": "#D7BA7D"
                    }
                },
                {
                    "scope": "constant.numeric.hex.cscriptsit",
                    "settings": {
                        "foreground": "#B5CEA8"
                    }
                },
                {
                    "scope": "constant.numeric.decimal.cscriptsit",
                    "settings": {
                        "foreground": "#B5CEA8"
                    }
                },
                {
                    "scope": "keyword.control.bold.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.test.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.testend.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.teststart.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.verification.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.analyzer.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.action.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.data.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.utility.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.mfg.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "entity.name.function.bold.cs.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "keyword.operator.comparison.cscriptsit",
                    "settings": {
                        "foreground": "#D4D4D4"
                    }
                },
                {
                    "scope": "keyword.operator.logical.cscriptsit",
                    "settings": {
                        "foreground": "#D4D4D4"
                    }
                },
                {
                    "scope": "keyword.operator.assignment.cscriptsit",
                    "settings": {
                        "foreground": "#D4D4D4"
                    }
                },
                {
                    "scope": "constant.language.boolean.cscriptsit",
                    "settings": {
                        "foreground": "#dc6666",
                        "fontStyle": "bold italic"
                    }
                },
                {
                    "scope": "keyword.other.special.cscriptsit",
                    "settings": {
                        "foreground": "#C586C0",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "variable.other.cscriptsit",
                    "settings": {
                        "foreground": "#9CDCFE"
                    }
                },
                {
                    "scope": "string.quoted.double.bold.cscriptsit",
                    "settings": {
                        "foreground": "#CE9178",
                        "fontStyle": "bold"
                    }
                },
                {
                    "scope": "markup.italic.hash-line.cscriptsit",
                    "settings": {
                        "foreground": "#cccc12",
                        "fontStyle": "italic"
                    }
                },
                {
                    "scope": "variable.special.argument.cscriptsit",
                    "settings": {
                        "foreground": "#cccc12",
                        "fontStyle": "italic"
                    }
                },
                {
                    "scope": "entity.name.filename.cscriptsit",  
                    "settings": {
                        "foreground": "#dc6666",
                        "fontStyle": "italic"
                    }
                }
            ]
        }
    }
}
```

3. **Save the file** (`Ctrl+S`)

4. **Reload VS Code:**
   - Press `Ctrl+Shift+P`
   - Type: **"Developer: Reload Window"**
   - Press Enter

---

## Supported Keywords (72 Total)

### Control Flow (9) - Purple Bold
- `$sit_If`, `$sit_IfDef`, `$sit_IfDef_Else`, `$sit_IfDef_End`
- `$sit_IfElse`, `$sit_IfEnd`, `$sit_ElseIfDef`
- `$sit_Loop`, `$sit_LoopEnd`

### Test Management (11) - Pink Bold
- `$sit_TestCaseStart`, `$sit_TestCaseEnd`, `$sit_TestCaseInitCond`
- `$sit_TestReportStart`, `$sit_TestReportEnd`
- `$sit_TestStepStart`, `$sit_TestStepEnd`, `$sit_TestSubStepStart`
- `$sit_TestUserAction`, `$sit_TestStrategy`
- `$sit_TestCaseFailOnWfcFailure`

### Verification (6) - Pink Bold
- `$sit_VerifyResult`, `$sit_VerifyResultPending`
- `$sit_CheckBits`, `$sit_CheckTestResultEq`
- `$sit_CompareBytesEq`, `$sit_ComparePtFileContentEq`

### Logic & BLE Analyzer (6) - Pink Bold
- `$sit_LogicAnalyzerStart`, `$sit_LogicAnalyzerStop`
- `$sit_LogicAnalyzerSave`, `$sit_LogicAnalyzerConfigure`
- `$sit_BleAnalyzerStart`, `$sit_BleAnalyzerStop`

### Actions (9) - Pink Bold
- `$sit_Procedure`, `$sit_RunScript`
- `$sit_Delay`, `$sit_DelayTime`, `$sit_Input`, `$sit_Exit`
- `$sit_StartTimer`, `$sit_ScriptTimeStart`, `$sit_ScriptTimeStop`

### Documentation (7) - Pink Bold
- `$sit_Materials`, `$sit_AdditionalMaterials`
- `$sit_EstEffort`, `$sit_ReviewEffort`
- `$sit_Traceability`, `$sit_AddNote`, `$sit_Print`

### Utility (11) - Pink Bold
- `$sit_Clear`, `$sit_ClearPatchData`
- `$sit_IsBitSet`, `$sit_IsBitClear`
- `$sit_LoadPtuOutputFile`
- `$sit_GetPassFailFromUser`, `$sit_GetPassFailFromUserWithInput`
- `$sit_YesNo`, `$sit_WaitForLifeCount`
- `$sit_WaitForOneMinNot1`, `$sit_WaitForUserAction`

### Manufacturing Data (4) - Pink Bold
- `$sit_MfgDataRead`, `$sit_MfgDataWrite`
- `$sit_MfgDataSetVar`, `$sit_MfgDataRestoreDefault`

### CS Commands (5) - Pink Bold
- `$cs_CsLog`, `$cs_Echo`, `$cs_Exit`
- `$cs_Pause`, `$cs_Print`

### Special Keywords (4) - Yellow Bold
- `Yes`, `No`, `none`, `continue`

**Note:** All keywords are **case-insensitive**. You can type them in any case combination!

---

## Color Scheme & Syntax Elements

| Element | Color | Style | Example |
|---------|-------|-------|---------|
| **Control Keywords** | Purple (#C586C0) | **Bold** | `$sit_If`, `$sit_Loop` |
| **Function Keywords** | Pink (#FF69B4) | **Bold** | `$sit_TestCaseStart`, `$sit_VerifyResult` |
| **Command Arguments (strings)** | Orange (#CE9178) | **Bold** | `"Test Case Title"` |
| **Filenames (ALL CAPS + ext)** | Red (#F44747) | **Bold Italic** | `INPUT.txt`, `TEST.sit` |
| **Hash Lines** | Yellow (#DCDCAA) | *Italic* | `#then this is a comment` |
| **! Variables** | Yellow (#DCDCAA) | *Italic* | `!nfc.gpi.data.State` |
| **Strings** | Orange (#CE9178) | Normal | `"regular string"` |
| **Numbers** | Light Green (#B5CEA8) | Normal | `42`, `0xFF` |
| **Comments** (`//`) | Green (#6A9955) | *Italic* | `// comment` |
| **Boolean Values** | Yellow (#DCDCAA) | **Bold** | `Yes`, `No` |

---

## Usage Examples

```cscriptsit
// Test case example
$sit_TestReportStart "Functional Test Report"
$sit_TestCaseStart "Verify NFC Communication"

// Control flow with variables
$sit_If condition == Yes
    $sit_Print "Test passed"
    $sit_VerifyResult !nfc.status.result
$sit_IfEnd

// File operations
$sit_RunScript INPUT.txt, OUTPUT.txt, 5000
$sit_Procedure TEST_CASE.sit

// Hash line comments
#then verify that the LED is blinking

// BLE analyzer
$sit_BleAnalyzerStart TEST_CONFIG
$sit_Delay 1000
$sit_BleAnalyzerStop

$sit_TestCaseEnd
$sit_TestReportEnd
```

---

## Autocomplete Features

Type `$` to trigger autocomplete and see all available commands in **CamelCase format**:

- Type `$sit_t` → Shows all test-related commands
- Type `$sit_b` → Shows BLE and bit-related commands
- Type `$cs_` → Shows all CS commands

All suggestions include:
- ✅ Command name in proper CamelCase
- ✅ Category (Control Flow, Test Management, etc.)
- ✅ Description of what the command does

---

## Troubleshooting

### Issue: Extension not found after installation

**Solution:**
1. Press `Ctrl+Shift+X` to open Extensions
2. Search for "CScriptSIT"
3. Verify it shows "Installed"
4. If not, reinstall using Method 1

### Issue: Keywords not highlighted or not bold

**Solution:**
1. Make sure you've added the custom color rules to `settings.json`
2. Verify theme is set to "Dobri Next -C09- Eve"
3. Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"
4. Check the bottom-right corner shows "CScriptSIT" as the language

### Issue: Autocomplete not working

**Solution:**
1. Verify extension is installed
2. Make sure file has `.sit` extension
3. Type `$` to trigger autocomplete
4. Check Output panel: View → Output → Select "Log (Extension Host)"

### Issue: Colors don't match the color scheme table

**Solution:**
1. Double-check your `settings.json` has the complete color configuration
2. Make sure you're using "Dobri Next -C09- Eve" theme
3. If using a different theme variant, update `[Dobri Next -C09- Eve]` to match your theme name

### Issue: Language not auto-detected for .sit files

**Solution:**
1. Manually select language: Click bottom-right corner → Select "CScriptSIT"
2. Or add to `settings.json`:
   ```json
   {
     "files.associations": {
       "*.sit": "cscriptsit"
     }
   }
   ```

---

## Updating the Extension

### After Making Changes to Extension Files:

1. **Repackage:**
   ```bash
   cd path/to/cscriptsit
   vsce package
   ```

2. **Reinstall:**
   ```bash
   code --install-extension cscriptsit-1.1.0.vsix
   ```

3. **Restart VS Code completely** (close all windows)

### After Making Changes to settings.json:

1. Save the file (`Ctrl+S`)
2. Reload Window: `Ctrl+Shift+P` → "Developer: Reload Window"

---

## File Structure

```
cscriptsit/
├── package.json                    # Extension manifest
├── extension.js                    # Autocomplete provider
├── language-configuration.json     # Language features (comments, brackets)
└── syntaxes/
    └── cscriptsit.tmLanguage.json # Syntax highlighting rules (TextMate grammar)
```

---

## Requirements

- **Visual Studio Code**: Version 1.60.0 or higher
- **Dobri Next Theme**: Recommended for best experience
- **Operating System**: Windows, macOS, or Linux

---

## Version History

### Version 1.1.0 (Current)
- ✅ All 72 keywords with CamelCase autocomplete
- ✅ Case-insensitive keyword matching
- ✅ Special highlighting for filenames (red bold italic)
- ✅ Hash line support (yellow italic)
- ✅ ! variable support (yellow italic)
- ✅ Bold string arguments for specific commands
- ✅ Integration with Dobri Next theme
- ✅ Improved pattern matching and scope definitions

### Version 1.0.0
- Initial release
- Basic syntax highlighting
- Standalone theme

---

## Known Limitations

- Extension requires custom `settings.json` configuration for full color scheme
- Works best with "Dobri Next -C09- Eve" theme (though compatible with any theme)
- Filenames must be in ALL CAPS to be highlighted (e.g., `TEST.sit`, not `test.sit`)

---

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Verify extension is installed: `Ctrl+Shift+X` → Search "CScriptSIT"
3. Check VS Code's Output panel: View → Output → "Log (Extension Host)"
4. Verify all files are in correct locations
5. Make sure `settings.json` includes the custom color rules

---

## License

This extension is provided as-is for internal use.

---

## Author

Created for CScriptSIT language support in VS Code.

---

**Enjoy coding with CScriptSIT! 🚀**

**Need help?** Make sure you've completed both the installation AND configuration steps!