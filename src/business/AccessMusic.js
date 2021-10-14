import FocusArt from '../presentation/assets/album_covers/focus.jpg'
import BreakThru from '../presentation/assets/album_covers/break_thru.jpg'
import LieToYouArt from '../presentation/assets/album_covers/lie_to_u.jpg'
import Swivel from '../presentation/assets/album_covers/swivel.jpg'
import GotYouArt from '../presentation/assets/album_covers/got_you.jpg'
export function getSongs(){
    return[
        {
            id:1,
            coverArt:FocusArt,
            title:'Focus',
            link:'https://songwhip.com/eltan/focus'
        },
        {
            id:2,
            coverArt:BreakThru,
            title:'Break Thru',
            link:'https://songwhip.com/eltan/break-thru'
        },
        {
            id:3,
            coverArt:LieToYouArt,
            title:'Lie To You',
            link:'https://songwhip.com/eltan/lie-to-you'
        },
        {
            id:4,
            coverArt:Swivel,
            title:'Swivel',
            link:'https://songwhip.com/eltan/swivel'
        },
        {
            id:5,
            coverArt:GotYouArt,
            title:'I Got You',
            link:'https://songwhip.com/eltan/i-got-you'
        }
    ]
}