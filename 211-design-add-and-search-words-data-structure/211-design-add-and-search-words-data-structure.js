class TrieNode {
  constructor() {
    this.chars = {}
    this.word = false
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode()
  }
  
  addWord(word) {
    let curr = this.root
    for (const c of word) {
      if (!curr.chars[c]) curr.chars[c] = new TrieNode()
      curr = curr.chars[c]
    }
    curr.word = true
  }
  
  search(word) {
    return dfs(0, this.root)
    function dfs(j, node) {
      let curr = node
      for (let i = j; i < word.length; i++) {
        const c = word[i]
        if (c === ".") {
          for (const char of Object.keys(curr.chars)) {
            if (dfs(i+1, curr.chars[char])) return true
          }
          return false
        }
        else {
          if (!curr.chars[c]) return false
          curr = curr.chars[c]
        }
      }
      return curr.word
    }
  }
  
}