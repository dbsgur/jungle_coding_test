
    let set = new Set();
    for (let i = 0; i < rel.length; i++) {
      set.add(rel[i]);
    }
    if (set.size === relation.length) {
      answer++;
    }
  }