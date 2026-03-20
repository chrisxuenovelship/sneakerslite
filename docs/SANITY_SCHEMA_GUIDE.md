# Sanity Schema Setup - Quick Reference

## Access Sanity Studio

**URL:** https://wl0eb4zu.sanity.studio

---

## Create Article Document Type

### Method 1: Visual UI (Easiest - 5 min)

1. **Sign in** with your Sanity account
2. **Bottom left:** Click **⚙️ Settings**
3. Click **Manage Types**
4. Click **+ Create Type** (right side)

### Name the Type
- **Type name:** `article`
- Click **Create**

---

## Add Fields (Copy-Paste Reference)

In the editor, add these fields in order:

| # | Field Name | Field Type | Required? | Config |
|---|-----------|-----------|-----------|--------|
| 1 | `title` | String | ✅ Yes | - |
| 2 | `author` | String | ✅ Yes | - |
| 3 | `excerpt` | Text | ✅ Yes | - |
| 4 | `publishedAt` | DateTime | ✅ Yes | Format: Date + time |
| 5 | `category` | String | ❌ No | List (enum): Case Study, Authentication, Trends, Technology |
| 6 | `seoTitle` | String | ❌ No | Help text: "Max 60 chars" |
| 7 | `seoDescription` | Text | ❌ No | Help text: "Max 160 chars" |
| 8 | `body` | Block Content | ✅ Yes | Include: headings (H2, H3), bullets, bold, italic |
| 9 | `mainImage` | Image | ❌ No | Enable hotspot |
| 10 | `slug` | Slug | ❌ No | Source from "title" field |

---

## Step-by-Step Field Creation

### 1. Title Field
```
Name: title
Type: String
Validation: Required
```

### 2. Author Field
```
Name: author
Type: String
Validation: Required
```

### 3. Excerpt Field
```
Name: excerpt
Type: Text
Validation: Required
Help text: "Short summary (2-3 sentences)"
```

### 4. Published At Field
```
Name: publishedAt
Type: DateTime
Validation: Required
Format: Date + Time
Default: Now
```

### 5. Category Field
```
Name: category
Type: String
List (Enum):
  - Case Study
  - Authentication
  - Trends
  - Technology
```

### 6. SEO Title Field
```
Name: seoTitle
Type: String
Help text: "Override title for search results (max 60 chars)"
```

### 7. SEO Description Field
```
Name: seoDescription
Type: Text
Help text: "Meta description for search results (max 160 chars)"
```

### 8. Body Field
```
Name: body
Type: Block Content
Validation: Required
Marks allowed:
  - strong (bold)
  - em (italic)
  - code
List styles:
  - bullet
  - number
Heading styles:
  - h2
  - h3
```

### 9. Main Image Field
```
Name: mainImage
Type: Image
Enable hotspot: Yes
Help text: "Featured image for article"
```

### 10. Slug Field
```
Name: slug
Type: Slug
Source field: title
URL path prefix: articles/
```

---

## Validate Schema

After adding all fields:

1. **Click Save** (top right)
2. Go to **Content**
3. Should see **+ Article** option
4. Click it → Create test article
5. Fill basic fields → Should work

---

## After Schema is Created

1. **Reply "Done"** to Jarvis
2. Jarvis will:
   - Populate demo article automatically
   - Set Vercel env vars
   - Deploy blog live
3. Visit: https://sneakerslite.com/blog
4. See demo article in grid ✨

---

## Troubleshooting

**Schema not appearing in Content tab?**
- Refresh page (Cmd+R or Ctrl+R)
- Check "article" type is saved

**Can't add fields?**
- Make sure you clicked **Create Type** first
- Type name must be lowercase

**Body field not accepting content?**
- Make sure Block Content type is selected
- Enable headings and marks in config

---

## Visual Reference

What the Sanity Studio should look like:

```
Settings
├── Manage Types
    └── article (your new type)
        ├── title (String, required)
        ├── author (String, required)
        ├── excerpt (Text, required)
        ├── publishedAt (DateTime, required)
        ├── category (String, enum)
        ├── seoTitle (String)
        ├── seoDescription (Text)
        ├── body (Block Content, required)
        ├── mainImage (Image)
        └── slug (Slug, from title)
```

---

**Status:** Ready for schema creation  
**Time needed:** 5 minutes  
**Next:** Reply "Done" when schema is saved
