import * as ts from 'typescript';
import * as MetaTypes from './MetadataTypes';
import * as Metadata from 'ojs/ojmetadata';
export declare function getGenericsAndTypeParameters(node: MetaTypes.HasTypeParameters, isPropsClass?: boolean): MetaTypes.GenericsTypes | undefined;
export declare function getGenericsAndTypeParametersFromType(typeObj: ts.Type, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.GenericsTypesFromType | undefined;
export declare function getSignatureFromType(type: ts.Type, isPropSignatureType: boolean, seenUnionTypeAliases: Set<string> | null, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.ALL_TYPES;
export declare function getTypeNameFromTypeReference(node: ts.TypeReferenceType): string | undefined;
export declare function getTypeNameFromType(type: ts.Type): string;
export declare function getTypeNameFromIntersectionTypes(types: Array<ts.Type>): string;
export declare function getNodeDeclaration(node: ts.TypeNode, checker: ts.TypeChecker): ts.Declaration;
export declare function getTypeDeclaration(type: ts.Type): ts.Declaration;
export declare function isTypeLiteralType(type: ts.Type): boolean;
export declare function isGenericTypeParameter(symbol: ts.Symbol): boolean;
export declare function getPropertyType(typeRef: ts.TypeNode, propName?: string): string;
export declare function getPropertyTypes(propDeclaration: ts.PropertyDeclaration): Record<string, ts.TypeNode>;
export declare function getComplexPropertyMetadata(memberSymbol: ts.Symbol, type: string, outerType: string, scope: MetaTypes.MetadataScope, flags: MetaTypes.MDFlags, propertyPath: string[], nestedArrayStack: string[], metaUtilObj: MetaTypes.MetaUtilObj): Record<string, Metadata.ComponentMetadataProperties>;
export declare function getSubstituteTypeForCircularReference(metaObj: MetaTypes.ALL_TYPES): string;
export declare function getAllMetadataForDeclaration(declarationWithType: ts.HasType, scope: MetaTypes.MetadataScope, flags: MetaTypes.MDFlags, propertyPath: string[] | null, declSymbol: ts.Symbol | null, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.ExtendedPropertiesMetadata | MetaTypes.ExtendedEventDetailsMetadata | MetaTypes.ExtendedSlotDataMetadata;
export declare function possibleComplexProperty(symbolType: ts.Type, type: string, scope: MetaTypes.MetadataScope): boolean;
export declare function isClassDeclaration(symbolType: ts.Type): boolean;
export declare function getEnumStringsFromUnion(union: ts.UnionTypeNode): string[] | null;
export declare function getPossibleTypeDef(prop: string, memberSymbol: ts.Symbol, metaObj: MetaTypes.ExtendedPropertiesMetadata | MetaTypes.ExtendedEventDetailsMetadata | MetaTypes.ExtendedSlotDataMetadata, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.TypedefObj;
export declare function isLocalExport(typeRefNode: ts.TypeNode, metaUtilObj: MetaTypes.MetaUtilObj): boolean;
