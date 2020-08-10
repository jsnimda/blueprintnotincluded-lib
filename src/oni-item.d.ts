import { Orientation } from "./enums/orientation";
import { Vector2 } from "./vector2";
import { UtilityConnection } from "./utility-connection";
import { BuildableElement } from "./b-export/b-element";
import { BUiScreen } from "./b-export/b-ui-screen";
import { SpriteModifierGroup } from "./drawing/sprite-modifier-group";
import { PermittedRotations } from "./enums/permitted-rotations";
import { ZIndex } from "./enums/z-index";
import { Overlay } from "./enums/overlay";
import { BBuilding } from "./b-export/b-building";
import { BuildMenuCategory } from "./b-export/b-build-order";
export declare class OniItem {
    static elementId: string;
    static defaultColor: string;
    id: string;
    name: string;
    imageId: string;
    iconUrl: string;
    spriteModifierId: string;
    isWire: boolean;
    isTile: boolean;
    isBridge: boolean;
    isElement: boolean;
    size: Vector2;
    tileOffset: Vector2;
    utilityConnections: UtilityConnection[];
    backColor: number;
    frontColor: number;
    orientations: Orientation[];
    dragBuild: boolean;
    objectLayer: number;
    buildableElementsArray: BuildableElement[][];
    defaultElement: BuildableElement[];
    materialMass: number[];
    uiScreens: BUiScreen[];
    spriteGroup: SpriteModifierGroup;
    tileableLeftRight: boolean;
    tileableTopBottom: boolean;
    private permittedRotations_;
    permittedRotations: PermittedRotations;
    zIndex: ZIndex;
    overlay: Overlay;
    constructor(id: string);
    copyFrom(original: BBuilding): void;
    getRealOverlay(overlay: Overlay): Overlay;
    cleanUp(): void;
    static oniItemsMap: Map<string, OniItem>;
    static readonly oniItems: OniItem[];
    static init(): void;
    static load(buildings: BBuilding[]): void;
    isOverlayPrimary(overlay: Overlay): boolean;
    isOverlaySecondary(overlay: Overlay): boolean;
    getCategoryFromItem(): BuildMenuCategory;
    static getOniItem(id: string): OniItem;
}
//# sourceMappingURL=oni-item.d.ts.map