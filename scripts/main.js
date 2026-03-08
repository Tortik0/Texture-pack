Events.on(ClientLoadEvent, function() {
let size = -40; UnitTypes.alpha.hitSize = size; UnitTypes.gamma.hitSize = size; UnitTypes.beta.hitSize = size;
                UnitTypes.evoke.hitSize = size; UnitTypes.incite.hitSize = size; UnitTypes.emanate.hitSize = size 
});


const applyAll = () => {
    Vars.content.units().each(type => {
        try { type.engineColor  = engineColor;  } catch(e) {}
        try { type.engineColor2 = engineColor2; } catch(e) {}
        try { type.omniMovement = true;         } catch(e) {}
    });
    Log.info("[yellow-engine-color] Applied yellow engines + omniMovement!");
};

Events.on(ClientLoadEvent, applyAll);
Events.on(WorldLoadEvent,  applyAll);


const Team = Packages.mindustry.game.Team;
const Color = Packages.arc.graphics.Color;

Team.sharded.color.set(Color.valueOf("2f272b"));
Team.sharded.palette[0].set(Color.valueOf("2f272b"));
Team.sharded.palette[1].set(Color.valueOf("2f272b"));
Team.sharded.palette[2].set(Color.valueOf("2f272b"));

const p = Team.sharded.palette;
Team.sharded.palettei[0] = Color.rgba8888(p[0].r, p[0].g, p[0].b, 1);
Team.sharded.palettei[1] = Color.rgba8888(p[1].r, p[1].g, p[1].b, 1);
Team.sharded.palettei[2] = Color.rgba8888(p[2].r, p[2].g, p [2].b, 1);


Team.crux.color.set(Color.valueOf("f05653"));
Team.crux.palette[0].set(Color.valueOf("f05653"));
Team.crux.palette[1].set(Color.valueOf("f05653"));
Team.crux.palette[2].set(Color.valueOf("f05653"));

const c = Team.crux.palette;
Team.crux.palettei[0] = Color.rgba8888(p[0].r, p[0].g, p[0].b, 1);
Team.crux.palettei[1] = Color.rgba8888(p[1].r, p[1].g, p[1].b, 1);
Team.crux.palettei[2] = Color.rgba8888(p[2].r, p[2].g, p [2].b, 1);

//s 4d4e58
//s 2f272b
//s 423d44
//c bf4c00
//c f05653