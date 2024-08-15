const membershipController = {
    getArticles: (req, res) => {
      const userMembership = req.user.membership_type;
      let articles;
  
      if (userMembership === 'A') {
        articles = [/* List of 3 articles */];
      } else if (userMembership === 'B') {
        articles = [/* List of 10 articles */];
      } else {
        articles = [/* List of all articles */];
      }
  
      res.json(articles);
    },
  
    getVideos: (req, res) => {
      const userMembership = req.user.membership_type;
      let videos;
  
      if (userMembership === 'A') {
        videos = [/* List of 3 videos */];
      } else if (userMembership === 'B') {
        videos = [/* List of 10 videos */];
      } else {
        videos = [/* List of all videos */];
      }
  
      res.json(videos);
    }
  };
  
  module.exports = membershipController;  