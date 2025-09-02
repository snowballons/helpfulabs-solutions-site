# File Downloads Setup Guide

## Current Status

✅ **Resource Pages**: Complete with download buttons  
⏳ **File Hosting**: Needs setup for actual downloads  
🔧 **Download Tracking**: Ready for analytics integration  

## File Hosting Options

### 1. **AWS S3** (Recommended for Production)
- **Pros**: Scalable, reliable, CDN integration
- **Cost**: ~$0.023/GB storage + bandwidth
- **Setup**: 
  ```bash
  # Install AWS SDK
  npm install @aws-sdk/client-s3
  
  # Create S3 bucket
  aws s3 mb s3://helpfulabs-resources
  ```

### 2. **Google Drive** (Quick Start)
- **Pros**: Free, easy setup, familiar interface
- **Cons**: Limited bandwidth, not ideal for high traffic
- **Setup**: 
  1. Upload files to Google Drive
  2. Set sharing to "Anyone with link"
  3. Use direct download links

### 3. **GitHub Releases** (Free for Open Source)
- **Pros**: Free, version control, reliable
- **Cons**: Public only, GitHub dependency
- **Setup**: Create releases with file attachments

### 4. **Vercel Blob** (Integrated Solution)
- **Pros**: Integrated with Vercel hosting
- **Cost**: $0.15/GB storage + $0.30/GB bandwidth
- **Setup**: 
  ```bash
  npm install @vercel/blob
  ```

## Implementation Steps

### Step 1: Choose Hosting Solution
For production, we recommend **AWS S3** with CloudFront CDN.

### Step 2: Upload Resource Files
Create these files based on the resource descriptions:

**Assessment Tools:**
- `business-systems-audit-checklist.pdf`
- `business-kpi-dashboard.xlsx`

**Templates:**
- `sop-templates-package.zip`
- `employee-handbook-template.docx`
- `customer-service-scripts.pdf`

**Spreadsheets:**
- `cash-flow-tracker.xlsx`
- `inventory-management-system.xlsx`
- `marketing-calendar-template.xlsx`

**Forms:**
- `supplier-evaluation-forms.zip`

### Step 3: Update ResourceCard Component

Replace the placeholder download function:

```typescript
// In src/components/ResourceCard.tsx
const handleDownload = async () => {
  try {
    // Track download event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'Resource',
        event_label: title,
        value: 1
      })
    }

    // Trigger download
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = `${id}.${format.toLowerCase()}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Download failed:', error)
    alert('Download failed. Please try again or contact support.')
  }
}
```

### Step 4: Update Resource Data

In `src/app/resources/page.tsx`, update the `downloadUrl` fields:

```typescript
const resources = [
  {
    id: 'business-audit-checklist',
    // ... other fields
    downloadUrl: 'https://your-cdn.com/business-audit-checklist.pdf',
  },
  // ... other resources
]
```

### Step 5: Add Download Analytics

Track downloads for optimization:

```typescript
// Add to your analytics setup
const trackDownload = (resourceId: string, resourceTitle: string) => {
  // Google Analytics 4
  gtag('event', 'download', {
    event_category: 'Resource',
    event_label: resourceTitle,
    resource_id: resourceId
  })
  
  // Or send to your analytics API
  fetch('/api/analytics/download', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resourceId, resourceTitle, timestamp: new Date() })
  })
}
```

## AWS S3 Setup (Detailed)

### 1. Create S3 Bucket
```bash
aws s3 mb s3://helpfulabs-resources --region us-east-1
```

### 2. Configure Bucket Policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::helpfulabs-resources/*"
    }
  ]
}
```

### 3. Upload Files
```bash
aws s3 cp ./resources/ s3://helpfulabs-resources/ --recursive
```

### 4. Set Up CloudFront (Optional)
- Create CloudFront distribution
- Point to S3 bucket
- Configure caching rules
- Use custom domain if desired

## Security Considerations

### 1. **Access Control**
- Consider signed URLs for premium resources
- Implement rate limiting to prevent abuse
- Monitor download patterns

### 2. **File Validation**
- Scan uploaded files for malware
- Validate file types and sizes
- Use virus scanning services

### 3. **Bandwidth Management**
- Set up CloudFront for caching
- Monitor bandwidth usage
- Implement download limits if needed

## Testing Downloads

### 1. **Local Testing**
```bash
# Test with local files
mkdir public/downloads
# Add test files
# Update downloadUrl to /downloads/filename.pdf
```

### 2. **Production Testing**
- Test all download links
- Verify file integrity
- Check mobile compatibility
- Test with different browsers

## Analytics & Optimization

### Track These Metrics:
- Download counts per resource
- Most popular resources
- Download completion rates
- User engagement after download

### Optimization Ideas:
- A/B test resource descriptions
- Create resource bundles
- Add email capture for premium resources
- Implement progressive download (preview → full)

## Support & Maintenance

### Regular Tasks:
- Monitor download analytics
- Update resources based on feedback
- Check for broken links
- Optimize file sizes
- Update resource descriptions

### User Support:
- Provide clear download instructions
- Offer alternative formats when possible
- Create FAQ for download issues
- Provide contact support for problems

## Cost Estimation

### AWS S3 + CloudFront:
- **Storage**: ~$2-5/month for 100GB
- **Bandwidth**: ~$8-15/month for 100GB transfer
- **Requests**: ~$0.40/month for 1M requests

### Total: ~$10-20/month for moderate usage

This scales with your business growth and provides professional-grade file delivery.
