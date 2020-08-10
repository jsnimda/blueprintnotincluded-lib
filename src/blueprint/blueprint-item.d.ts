import { Blueprint } from "./blueprint";
import { Vector2 } from "../vector2";
import { BuildableElement } from "../b-export/b-element";
import { UiSaveSettings } from "../b-export/b-ui-screen";
import { Orientation } from "../enums/orientation";
import { OniItem } from "../oni-item";
import { DrawPart } from "../drawing/draw-part";
import { OniBuilding } from "../io/oni/oni-building";
import { BniBuilding } from "../io/bni/bni-building";
import { MdbBuilding } from "../io/mdb/mdb-building";
import { CameraService } from "../drawing/camera-service";
import { PixiUtil } from "../drawing/pixi-util";
export declare class BlueprintItem {
    static defaultRotation: number;
    static defaultScale: Vector2;
    static defaultTemperature: number;
    id: string;
    temperature: number;
    temperatureCelcius: number;
    temperatureScale: number;
    readonly header: string;
    buildableElements: BuildableElement[];
    uiSaveSettings: UiSaveSettings[];
    getUiSettings(id: string): UiSaveSettings | undefined;
    setElement(elementId: string, index: number): void;
    tileIndexes: number[];
    private selected_;
    selected: boolean;
    position: Vector2;
    orientation: Orientation;
    rotation: number;
    scale: Vector2;
    oniItem: OniItem;
    topLeft: Vector2;
    bottomRight: Vector2;
    drawParts: DrawPart[];
    depth: number;
    alpha: number;
    visible: boolean;
    tileable: boolean[];
    innerYaml: any;
    constructor(id?: string);
    getName(): string;
    getDebug1(): string;
    getDebug2(): string;
    getDebug3(): string;
    getDebug4(): string;
    getDebug5(): string;
    importOniBuilding(building: OniBuilding): void;
    importBniBuilding(building: BniBuilding): void;
    importMdbBuilding(original: MdbBuilding): void;
    private updateRotationScale;
    nextOrientation(): void;
    changeOrientation(newOrientation: Orientation | undefined): void;
    cleanUp(): void;
    toMdbBuilding(): MdbBuilding;
    toBniBuilding(): BniBuilding;
    getSelectedElementsTag(): number[];
    prepareBoundingBox(): void;
    private updateTileableParts;
    updateTileables(blueprint: Blueprint): void;
    setInvisible(): void;
    isOpaque: boolean;
    visualizationTint: number;
    cameraChanged(camera: CameraService): void;
    modulateSelectedTint(camera: CameraService): void;
    applyTileablesToDrawPart(drawPart: DrawPart): void;
    utilitySprites: any[];
    container: any;
    containerCreated: boolean;
    reloadCamera: boolean;
    drawPixi(camera: CameraService, pixiUtil: PixiUtil): void;
    private drawPixiUtility;
    sortChildren(): void;
    destroyed: boolean;
    destroy(): void;
}
//# sourceMappingURL=blueprint-item.d.ts.map