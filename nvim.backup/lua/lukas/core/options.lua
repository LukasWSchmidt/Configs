local opt = vim.opt --ease

--line numbers
opt.relativenumber = true
opt.number = true

--tabs & indentaiton
opt.tabstop = 4
opt.shiftwidth = 4
opt.expandtab = true
opt.autoindent = true

--line wrapping
opt.wrap = false

--search settings
opt.ignorecase = true
opt.smartcase = true

--apprearance
opt.termguicolors = true
opt.signcolumn = "yes"

--backspace
opt.backspace = "indent,eol,start"

--clipboard
opt.clipboard:append("unnamedplus")

--split windows
opt.splitright = true
opt.splitbelow = true

opt.iskeyword:append("-")


