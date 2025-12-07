# Discrete Set Theory Full Stack Application

هذا مشروع Full Stack لعمليات نظرية المجموعات المنفصلة (Discrete Set Theory) يتكون من:
- **Backend**: Spring Boot (Java)
- **Frontend**: Angular

## المميزات

التطبيق يوفر العمليات التالية على المجموعات:
- ✅ **Union** (الاتحاد): A ∪ B
- ✅ **Intersection** (التقاطع): A ∩ B  
- ✅ **Complement** (المتممة): A'
- ✅ **Difference** (الفرق): A - B
- ✅ **Cardinality** (العدد الأصلي): |A|
- ✅ **Get Elements** (الحصول على العناصر)

## المتطلبات

### Backend
- Java 21 أو أحدث
- Maven 3.6 أو أحدث

### Frontend
- Node.js 18 أو أحدث
- npm 9 أو أحدث

## التثبيت والتشغيل

### 1. تشغيل Backend (Spring Boot)

```bash
cd Backend/demo

# تثبيت Dependencies
./mvnw clean install

# تشغيل السيرفر
./mvnw spring-boot:run
```

السيرفر سيعمل على: `http://localhost:8080`

### 2. تشغيل Frontend (Angular)

```bash
cd Frontend/my-app

# تثبيت Dependencies
npm install

# تشغيل التطبيق
npm start
```

التطبيق سيعمل على: `http://localhost:4200`

## كيفية الاستخدام

1. **تهيئة المجموعة الشاملة (Universal Set)**:
   - أدخل عناصر المجموعة الشاملة U
   - اضغط على زر "Initialize U"

2. **إنشاء المجموعات الفرعية**:
   - حدد عدد المجموعات الفرعية
   - اختر عناصر كل مجموعة فرعية من U

3. **تنفيذ العمليات**:
   - اختر العملية المطلوبة (Union, Intersection, etc.)
   - اختر المجموعات المطلوبة للعملية
   - اضغط "Execute Operation"
   - ستظهر النتيجة تلقائياً

## البنية التقنية

### Backend (Spring Boot)
- **Controller**: يستقبل الطلبات من Frontend
- **Service (MySet)**: يحتوي على منطق عمليات المجموعات
- **Bit Operations**: استخدام Bit Manipulation لتمثيل المجموعات
- **DTO**: نقل البيانات بين Frontend و Backend

### Frontend (Angular)
- **Component (App)**: الواجهة الرئيسية
- **Service (SetService)**: التواصل مع Backend API
- **Reactive Forms**: إدارة المدخلات والبيانات

## الإصلاحات التي تمت

### Backend:
✅ تم إصلاح Spring Boot version في pom.xml (من 4.0.0 إلى 3.4.0)
✅ تم إصلاح dependencies (من webmvc إلى web)
✅ تم تحديد server port (8080)

### Frontend:
✅ تم إضافة HttpClient provider
✅ تم ربط Component بـ Service
✅ تم إصلاح data binding للمجموعات الفرعية
✅ تم إضافة universe map tracking
✅ تم إضافة bit representations management
✅ تم تحسين واجهة المستخدم (UI)
✅ تم إضافة عرض النتائج

## API Endpoints

جميع endpoints تستخدم POST method:

- `POST /getUniversalSet` - تهيئة المجموعة الشاملة
- `POST /append` - إضافة عنصر لمجموعة
- `POST /union` - اتحاد مجموعتين
- `POST /intersection` - تقاطع مجموعتين
- `POST /complement` - متممة مجموعة
- `POST /difference` - فرق مجموعتين
- `POST /getCardinality` - الحصول على عدد العناصر
- `POST /getElements` - الحصول على عناصر المجموعة

## الملاحظات

- التطبيق يستخدم Bit Manipulation لتمثيل المجموعات بكفاءة
- جميع العناصر يجب أن تكون من المجموعة الشاملة U
- CORS مفعّل للسماح بالاتصال بين Frontend و Backend
