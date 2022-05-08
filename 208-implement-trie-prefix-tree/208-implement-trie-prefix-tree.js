class TrieNode {
  constructor() {
    this.chars = {}
    this.word = false
  }
  
  
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let curr = this.root
    for (const c of word) {
      if (!curr.chars[c]) curr.chars[c] = new TrieNode()
      curr = curr.chars[c]
    }
    curr.word = true
  }


  search(word) {
    let curr = this.root
    for (const c of word) {
      if (!curr.chars[c]) return false
      curr = curr.chars[c]
    }
    return curr.word
  }

  startsWith(word) {
    let curr = this.root
    for (const c of word) {
      if (!curr.chars[c]) return false
      curr = curr.chars[c]
    }
    return true
  }
}