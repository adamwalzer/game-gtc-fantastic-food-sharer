import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from 'game-green-team-challenge/components/title_screen';
import LevelScreen from 'game-green-team-challenge/components/level_screen_component';
import LevelCompleteScreen from
    'game-green-team-challenge/components/level_complete_screen_component';

import FantasticFoodSharer1InfoScreen from
    'game-green-team-challenge/components/fantastic_food_sharer_one_info_screen';
import FantasticFoodSharer1Screen from
    'game-green-team-challenge/components/fantastic_food_sharer_level_one_screen';
import FantasticFoodSharer2InfoScreen from
    'game-green-team-challenge/components/fantastic_food_sharer_two_info_screen';
import FantasticFoodSharer2Screen from
    'game-green-team-challenge/components/fantastic_food_sharer_level_two_screen';
import FantasticFoodSharer3InfoScreen from
    'game-green-team-challenge/components/fantastic_food_sharer_three_info_screen';
import FantasticFoodSharer3Screen from
    'game-green-team-challenge/components/fantastic_food_sharer_level_three_screen';
import FantasticFoodSharer4InfoScreen from
    'game-green-team-challenge/components/fantastic_food_sharer_four_info_screen';
import FantasticFoodSharer4Screen from
    'game-green-team-challenge/components/fantastic_food_sharer_level_four_screen';
import FantasticFoodSharer5InfoScreen from
    'game-green-team-challenge/components/fantastic_food_sharer_five_info_screen';
import FantasticFoodSharer5Screen from
    'game-green-team-challenge/components/fantastic_food_sharer_level_five_screen';

import QuitScreen from 'game-green-team-challenge/components/quit_screen';

import ItemsToSort from 'game-green-team-challenge/components/items_to_sort';

let binNames = [
    'recycle',
    'landfill',
    'compost',
    'liquids',
    'food-share',
];

let itemsToSort = _.filter(ItemsToSort, item => _.includes(binNames, item.bin));

let audioRefs = _.uniq(_.map(itemsToSort, v =>
    _.kebabCase(_.replace(v.name, /\d+/g, '')))
);

let audioArray = _.map(audioRefs, (v, k) => {
    return {
        type: skoash.Audio,
        ref: v,
        key: k,
        props: {
            type: 'voiceOver',
            src: `${CMWN.MEDIA.GAME + 'sound-assets/_vositems/' + v}.mp3`,
            checkReady: false,
            onPlay: function () {
                this.updateScreenData({
                    keys: ['item', 'new'],
                    data: false,
                });
            }
        },
    };
});

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screenBufferAmount={2}
        screens={[
            iOSScreen,
            TitleScreen,
            LevelScreen(3.0),
            FantasticFoodSharer1InfoScreen,
            FantasticFoodSharer1Screen,
            LevelScreen(3.1),
            FantasticFoodSharer2InfoScreen,
            FantasticFoodSharer2Screen,
            LevelScreen(3.2),
            FantasticFoodSharer3InfoScreen,
            FantasticFoodSharer3Screen,
            LevelScreen(3.3),
            FantasticFoodSharer4InfoScreen,
            FantasticFoodSharer4Screen,
            LevelScreen(3.4),
            FantasticFoodSharer5InfoScreen,
            FantasticFoodSharer5Screen,
            LevelScreen(3.5),
            LevelCompleteScreen(3),
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_recycle`}
                spriteClass="recycle-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_liquids`}
                spriteClass="liquids-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_landfill`}
                spriteClass="landfill-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_foodshare`}
                spriteClass="food-share-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_compost`}
                spriteClass="compost-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level3robotarm`}
                spriteClass="fantastic-claw"
                dataTarget="fantastic-claw"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.3.conveyor.belt`}
                spriteClass="fantastic-belt"
                dataTarget="fantastic-belt"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.3.chocolate.milk`}
                spriteClass="fantastic-chocolate"
                dataTarget="fantastic-chocolate"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.3.milk`}
                spriteClass="fantastic-milk"
                dataTarget="fantastic-milk"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.3.fruit.juice`}
                spriteClass="fantastic-fruit"
                dataTarget="fantastic-fruit"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.3.orange.juice`}
                spriteClass="fantastic-orange"
                dataTarget="fantastic-orange"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}front.back.funnel`}
                frameSelectors={['.back', '.front']}
                spriteClass="funnel"
                dataTarget="funnel"
            />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_recycle.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_liquids.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_landfill.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_foodshare.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_compost.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}purple.ribbon.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}luggage.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.star.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.01.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.02.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}transition.frame.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.mainnav.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}Img.anotherChance.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}img.resort.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}vertical.pipe.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}pipe.meter.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}container.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}titlescrnbg.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.01.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.02.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.03.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.04.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.transition.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.recycle.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.landfill.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.compost.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}quit.background.jpg`} />,
            <skoash.Audio type="sfx" ref="button" src={`${CMWN.MEDIA.EFFECT}ButtonClick.mp3`} />,
            <skoash.Audio
                type="sfx"
                ref="screen-complete"
                src={`${MEDIA.EFFECT}NextAppear.mp3`}
                volume={3}
            />,
            <skoash.Audio ref="BKG3" type="background" src={`${CMWN.MEDIA.EFFECT}BKG3.mp3`} loop />,
            <div className="background title" />,
            <div className="background bkg1" />,
            <div className="background bkg2" />,
            <div className="background bkg3" />,
            <div className="background bkg4" />,
            <div className="background trash" />,
            <div className="background transition" />,
            <div className="background quit" />,
        ].concat(audioArray)}
    />
);

if (module.hot) module.hot.accept();
