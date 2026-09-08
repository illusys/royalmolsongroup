# Royal Molson Group — Campaign Storefront

Responsive campaign-led storefront for Royal Molson Group / Dragon Totem.

## Campaign architecture

- **Mama's Promise** — Back-to-school lunch packs.
- **Her Moment** — Water flasks and everyday hydration.
- **Desk Goals** — Food flasks for working adults.

The site is designed to move paid-media traffic into a campaign-specific message path instead of dropping every visitor on a generic product catalogue.

## Commerce behaviour

- Retail product cards show current published Royal Molson online-store prices where available.
- Back-to-school bundle prices are intentionally not invented; they are confirmed in WhatsApp until an approved price list is supplied.
- Wholesale pricing and MOQ are not hard-coded. Quantity-based enquiries move to a pre-filled WhatsApp quote request.
- All WhatsApp CTAs carry useful product/campaign context rather than opening with a generic message.

## Brand system

- Royal Green `#008040`
- Vivid Orange `#FF7000`
- Signal Yellow `#FFF000` used only as an accent
- Ink `#0A0A0A`
- Saira display typography
- Barlow body/UI typography

The current interface deliberately avoids gradients and glassmorphism and uses short, benefit-led copy.

## Product imagery

The repository currently contains no approved Royal Molson product-photo assets, so the layout uses temporary neutral product silhouettes. Replace them with approved square product photography from the Royal Molson catalogue without changing the card structure.

Recommended paths:

```text
assets/products/rm-2007f4.webp
assets/products/rm-2007f6.webp
assets/products/rm-500ml-a.webp
assets/products/rm-1-0l-water.webp
assets/products/rm-1-2l-wa.webp
assets/products/rm-1-5l-water.webp
assets/products/rm-800fa.webp
assets/products/rm-1-0fa.webp
assets/products/rm-1-3l.webp
assets/products/rm-1-4l.webp
```

## Local preview

Open `index.html` directly or serve the folder with any static web server.

## Deployment

This is a static site and can be deployed to GitHub Pages, Netlify, Cloudflare Pages, Vercel, or the Royal Molson web server.

## Next production steps

1. Add approved product photography and the final Royal Molson / Dragon Totem logo assets.
2. Confirm current retail prices for campaign bundles.
3. Provide wholesale tiers / MOQ rules if automatic wholesale price unlocking is required rather than quote-on-WhatsApp.
4. Add GA4 ecommerce events, Meta Pixel/CAPI, TikTok Pixel/Events API and Google Ads conversion tracking before paid-media launch.
5. Connect checkout/payment if the campaign should transact directly on this landing page rather than hand off to the existing Royal Molson store or WhatsApp.
