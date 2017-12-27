//
//  Localizable.swift
//  OnMap
//
//  Created by Alex Alexandrovych on 04/05/2017.
//  Copyright © 2017 OnMap LTD. All rights reserved.
//

import Foundation
import OML10n

enum LocalizedText: String {

    case searchMap = "Search.Map"
    case searchList = "Search.List"
    case searchFilters = "Search.Filters"

    case mapMapArea = "Map.MapArea"
    case mapLoading = "Map.Loading"
    case mapNoResults = "Map.NoResults"

}

func localized(_ key: LocalizedText) -> String {
    return Bundle.main.localizedString(forKey: key.rawValue, value: key.rawValue, table: nil)
}

func localized(_ key: LocalizedText, args: [CVarArg]) -> String {
    let format = localized(key)
    return withVaList(args) { arguments -> String in
        return NSString(format: format, locale: Localization.currentLocale, arguments: arguments) as String
    }
}
