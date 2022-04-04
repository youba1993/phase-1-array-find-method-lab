function superbowlWin(record) {
    
    for (const user of record) {
        if (user.result === "W"){
            return user.year
        }
      }
    
}

