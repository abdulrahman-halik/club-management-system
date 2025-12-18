# Phase 6: Club Inventory & Asset Management

## Overview
Phase 6 introduces digital asset management to track club property. This reduces loss of equipment and ensures kit is available when needed.

## Detailed Feature Requirements

### 1. Equipment Catalog
*   **Asset Types**:
    *   **Match Kits**: Team bags, stumps, scoring books.
    *   **Training Gear**: Balls (New/Old), cones, fielding nets.
    *   **Ground Equipment**: Covers, rollers, line markers.
*   **Item Details**:
    *   **Name/ID**: Unique identifier (e.g., "KIT-BAG-1").
    *   **Condition**: Good, Fair, Poor, Replacement Needed.
    *   **Purchase Date**: For depreciation/replacement tracking.

### 2. Stock Levels (Consumables)
*   **Match Balls**:
    *   Track count of Grade A (League Match) vs Grade B (Friendly) balls.
    *   *Low Stock Alert*: Visual warning when stock drops below 6.
*   **First Aid**:
    *   Track expiry dates of kit contents.

### 3. Check-In / Check-Out
*   **Workflow**:
    *   **Assign**: Captains "check out" a match bag on Friday.
    *   **Return**: Captains "check in" the bag on Sunday, flagging any missing/damaged items.
*   **Responsibility**: Log *who* currently has an item.

## Technical Considerations
*   **Database**:
    *   `inventory` table: `id`, `name`, `category`, `status`, `assigned_to` (user_id), `last_updated`.
*   **UI**: Mobile-first design is critical as this will be used pitch-side or in the storage shed using phones.
*   **QR Codes** (Future Scope): Potential to tag kit bags with QR codes for quick scanning/lookup.
