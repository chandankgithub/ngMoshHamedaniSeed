
export class TwitterTweetService{
    getTweets() : any[] { 
        return  [
                    {
                        profileImageSrc: "http://lorempixel.com/100/100/people",
                        authorName: 'Windward',
                        twitterName: '@windwardstudios',
                        description: 'Looking for a better company reporting or docgen app?',
                        likes: {
                            likeCount: 0,
                            iLike: false
                        }
                    },
                    {
                        profileImageSrc: "http://lorempixel.com/100/100/people",
                        authorName: 'Angular JS News',
                        twitterName: '@angularjs_news',
                        description: 'Right Relevance: Infulencers, Articles and Conversations',
                        likes: {
                            likeCount: 5,
                            iLike: true
                        }
                    },
                    {
                        profileImageSrc: "http://lorempixel.com/100/100/people",
                        authorName: 'UX & Bootstrap',
                        twitterName: '@3rdwave',
                        description: '10 Reasons Why Web Projects Fail',
                        likes: {
                            likeCount: 1,
                            iLike: true
                        }
                    }
                ]
                
    }
}